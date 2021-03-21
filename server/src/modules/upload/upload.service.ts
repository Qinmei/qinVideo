import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Upload } from './upload.entity';
import { FileService } from '../file/file.service';
import { QueryDto, CreateDto } from './dto';
import { UploadData } from './interfaces';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload)
    private readonly uploadRepository: Repository<Upload>,
    private readonly fileService: FileService,
  ) {}

  async list(
    query: QueryDto,
  ): Promise<{ list: Upload[] | undefined; total: number }> {
    const [list, total] = await this.uploadRepository.findAndCount({
      skip: (query.page - 1) * query.size,
      take: query.size,
      order: {
        [query.sortBy]: query.sortOrder,
      },
    });
    return {
      list,
      total,
    };
  }

  async find(id: string): Promise<Upload | undefined> {
    return await this.uploadRepository.findOne(id);
  }

  async create(files: any, dir: string): Promise<any | undefined> {
    return await Promise.all(
      files.map(item => this.fileService.createFile(item, dir)),
    );
  }

  async existUploadedFile(directory: string, name: string) {
    return await this.fileService.fileExist(directory, name);
  }

  async existFileHash(hash: string): Promise<Upload | boolean> {
    const fileInfo = await this.uploadRepository.findOne({
      hash,
      status: 'uploading',
    });

    // 可以创建任务

    if (!fileInfo) {
      return false;
    }

    // 创建文件上传任务但是没有上传文件块
    const receive = JSON.parse(fileInfo.receive);

    if (receive.length === 0) {
      return fileInfo;
    }

    // 判断本地文件是否还存在, 以便数据库的文件能够对的上

    const fileExist = await this.fileService.fileExist(
      fileInfo.directory,
      fileInfo.name,
    );

    // 如果文件不存在就将本条记录记录为删除

    if (!fileExist) {
      await this.update(fileInfo.id, {
        status: 'delete',
      });
      return false;
    }

    return fileInfo;
  }

  async createBigFile(data: CreateDto): Promise<any | undefined> {
    const initData = {
      ...data,
      name: '~' + data.name,
      uuid: uuidv4(),
      status: 'uploading',
      receive: JSON.stringify([]),
    };
    return await this.uploadRepository.save(initData);
  }

  async getUploadBigFileInfo(uuid: string): Promise<any | undefined> {
    return await this.uploadRepository.findOne({
      uuid,
    });
  }

  fingureFileUploadStatus(receive: Array<[number, number]>, size: number) {
    // 获得文件中缺失的文件区块
    const newArr = receive.sort((a, b) => a[0] - b[0]);
    const fileFilled = [...newArr, [size, size]];
    const fileMissing: Array<[number, number]> = [];
    fileFilled.reduce(
      (pre, cur) => {
        if (pre[1] < cur[0]) {
          fileMissing.push([pre[1], cur[0]]);
        }
        return cur;
      },
      [0, 0],
    );
    return fileMissing;
  }

  async uploadBigFile(data: UploadData): Promise<any | boolean> {
    const { uuid, start, end, file, size } = data;
    const info = await this.find(uuid);
    const fileCent = [Number(start), Number(end)];

    const receive = JSON.parse(info.receive);
    if (
      receive.some(item => item[0] <= fileCent[0] && item[1] >= fileCent[1])
    ) {
      return receive;
    }

    const result = await this.fileService.updateFile(
      file,
      info.name,
      info.directory,
      Number(start),
    );

    if (result) {
      receive.push(fileCent);
      const isDone = this.fingureFileUploadStatus(receive, Number(size));
      await this.update(info.id, {
        status: isDone.length === 0 ? 'uploaded' : 'uploading',
        receive: JSON.stringify(receive),
        name: isDone.length === 0 ? info.name.slice(1) : info.name,
      });

      // 如果文件上传完成, 则去除名字前面的~
      if (isDone.length === 0) {
        await this.fileService.uploadFileDone(info.name, info.directory);
      }

      return isDone;
    }
    return true;
  }

  async update(id: number, data: Partial<Upload>): Promise<any | undefined> {
    return await this.uploadRepository.update(id, data);
  }

  async remove(ids: string[]): Promise<any | undefined> {
    const uploadingList = await this.uploadRepository
      .createQueryBuilder('upload')
      .where('upload.id IN (:...ids)', { ids })
      .where('upload.status = :status', { status: 'uploading' })
      .getMany();

    await this.uploadRepository.delete(ids);
    try {
      await this.fileService.clearUploadingFile(uploadingList);
    } catch (error) {}

    return true;
  }

  async clear(): Promise<any | undefined> {
    return await this.uploadRepository.clear();
  }
}
