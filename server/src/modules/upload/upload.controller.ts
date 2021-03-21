import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { CreateDto, QueryDto } from './dto';
import { NoAuth } from '../../decorators';
import { BusinessException, ErrorCode } from '../../exceptions';
import { UploadGateway } from './upload.gateway';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly uploadGateway: UploadGateway,
  ) {}

  @Get()
  @NoAuth(true)
  async list(@Query() query: QueryDto) {
    return await this.uploadService.list(query);
  }

  @Post()
  @NoAuth(true)
  @UseInterceptors(AnyFilesInterceptor())
  async create(@UploadedFiles() files, @Body() data: { directory: string }) {
    return await this.uploadService.create(files, data.directory);
  }

  @Post('/createSession')
  @NoAuth(true)
  async createBigFile(@Body() data: CreateDto) {
    const file = await this.uploadService.existUploadedFile(
      data.directory,
      data.name,
    );

    if (file) {
      throw new BusinessException(ErrorCode.FileDirExist);
    }

    const exist = await this.uploadService.existFileHash(data.hash);
    if (exist) {
      return exist;
    }

    const result = await this.uploadService.createBigFile(data);
    this.uploadGateway.inList();
    return result;
  }

  @Post('/:id')
  @NoAuth(true)
  @UseInterceptors(FileInterceptor('file'))
  async uploadBigFile(
    @Param() params: { id: string },
    @UploadedFile() file,
    @Body() data,
  ) {
    const info = await this.uploadService.find(params.id);

    if (!info) {
      throw new BusinessException(ErrorCode.FileSessionError);
    }
    const result = await this.uploadService.uploadBigFile({
      uuid: params.id,
      file,
      ...data,
    });
    this.uploadGateway.inList();
    return result;
  }

  @Get('/:id')
  @NoAuth(true)
  async find(@Param() id: string) {
    return await this.uploadService.find(id);
  }
}
