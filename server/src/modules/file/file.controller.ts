import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { FileService } from './file.service';
import { BusinessException, ErrorCode } from '../../exceptions';
import {
  ParamsData,
  DeleteBatchData,
  RenameDataArr,
  RenameParamsData,
  CopyOrMove,
} from './interfaces';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('*')
  async find(@Param() path: ParamsData) {
    try {
      return await this.fileService.list(path);
    } catch (error) {
      throw new BusinessException(ErrorCode.FileListError);
    }
  }

  @Post('*')
  async create(@Param() path: ParamsData) {
    try {
      return await this.fileService.create(path);
    } catch (error) {
      throw new BusinessException(ErrorCode.FileCreateError);
    }
  }

  @Put('*')
  async rename(@Param() path: ParamsData, @Body() data: RenameParamsData) {
    try {
      const oldPath = this.fileService.getParamsFilePath(path);
      const newData = [{ oldPath, newPath: data.file }];
      return await this.fileService.rename(newData);
    } catch (error) {
      throw new BusinessException(ErrorCode.FileRenameError);
    }
  }

  @Put()
  async renameBatch(@Body() data: RenameDataArr) {
    try {
      const { files } = data;
      return await this.fileService.rename(files);
    } catch (error) {
      throw new BusinessException(ErrorCode.FileRenameError);
    }
  }

  @Delete('*')
  async remove(@Param() path: ParamsData) {
    try {
      const oldPath = this.fileService.getParamsFilePath(path);
      return await this.fileService.remove([oldPath]);
    } catch (error) {
      throw new BusinessException(ErrorCode.FileDeleteError);
    }
  }

  @Delete()
  async removeBatch(@Body() data: DeleteBatchData) {
    try {
      const { files } = data;
      return await this.fileService.remove(files);
    } catch (error) {
      throw new BusinessException(ErrorCode.FileDeleteError);
    }
  }

  @Post()
  async copyOrMove(@Body() data: CopyOrMove) {
    const { type, files } = data;
    if (type === 'move') {
      try {
        return await this.fileService.move(files);
      } catch (error) {
        throw new BusinessException(ErrorCode.FileMoveError);
      }
    } else {
      try {
        return await this.fileService.copy(files);
      } catch (error) {
        throw new BusinessException(ErrorCode.FileCopyError);
      }
    }
  }

  @Get()
  async listAllDir() {
    try {
      return await this.fileService.listAllDir();
    } catch (error) {
      throw new BusinessException(ErrorCode.FileListAllDirError);
    }
  }
}
