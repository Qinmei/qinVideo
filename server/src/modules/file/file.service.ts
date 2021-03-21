import * as fs from 'fs-extra';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import * as rimraf from 'rimraf';
import { Config } from '../../config';
import { FileItem, ParamsData, RenameData, DirTree } from './interfaces';
import { Upload } from '../upload/upload.entity';

@Injectable()
export class FileService {
  private readonly basePath: string;
  constructor() {
    const filePath = Config.filePath;
    this.basePath = path.join(__dirname, '../../../../', filePath);
  }

  getParamsFilePath(pathInfo: ParamsData): string {
    const pathArr = Object.values(pathInfo);
    const filePath = path.join(this.basePath, ...pathArr);
    return filePath;
  }

  getFilePath(pathInfo: string): string {
    return path.join(this.basePath, pathInfo);
  }

  async fileExist(path1: string, path2: string): Promise<boolean> {
    const allPath = path.join(this.basePath, path1, path2);
    const result = await fs.existsSync(allPath);
    return result;
  }

  async isFile(filePath: string): Promise<boolean> {
    const result = await fs.statSync(filePath);
    return result.isFile();
  }

  async list(pathInfo: ParamsData): Promise<FileItem[]> {
    const filePath = this.getParamsFilePath(pathInfo);

    const data = await fs.readdirSync(filePath);

    const result: FileItem[] = [];
    for (const item of data) {
      const itemInfo = await fs.statSync(filePath + '/' + item);
      const isFile = itemInfo.isFile();
      result.push({
        ...itemInfo,
        type: isFile ? 'fiile' : 'folder',
        name: item,
      });
    }
    return result;
  }

  async create(pathInfo: ParamsData): Promise<fs.Stats> {
    const filePath = this.getParamsFilePath(pathInfo);

    await fs.mkdirSync(filePath, { recursive: true });
    const result = await fs.statSync(filePath);
    return result;
  }

  async rename(pathData: RenameData[]): Promise<boolean> {
    for (const ele of pathData) {
      const { oldPath, newPath } = ele;
      const oldFilePath = this.getFilePath(oldPath);
      const newFilePath = this.getFilePath(newPath);

      await fs.renameSync(oldFilePath, newFilePath);
      await fs.statSync(newFilePath);
    }
    return true;
  }

  async remove(pathArr: string[]): Promise<boolean> {
    for (const ele of pathArr) {
      const item = this.getFilePath(ele);
      const isFile = await fs.statSync(item).isFile();

      if (isFile) {
        await fs.unlinkSync(item);
      } else {
        await rimraf.sync(item);
      }
    }
    return true;
  }

  async move(files: RenameData[]): Promise<boolean> {
    for (const ele of files) {
      const { oldPath, newPath } = ele;
      const oldFilePath = this.getFilePath(oldPath);
      const newFilePath = this.getFilePath(newPath);

      await fs.move(oldFilePath, newFilePath, { overwrite: true });
    }
    return true;
  }

  async copy(files: RenameData[]): Promise<boolean> {
    for (const ele of files) {
      const { oldPath, newPath } = ele;
      const oldFilePath = this.getFilePath(oldPath);
      const newFilePath = this.getFilePath(newPath);

      await fs.copy(oldFilePath, newFilePath);
    }
    return true;
  }

  async listAllDir(pathInfo: string = this.basePath): Promise<DirTree[]> {
    const data = await fs.readdirSync(pathInfo);

    const result: DirTree[] = [];
    for (const item of data) {
      const itemPath = path.join(pathInfo, item);
      const itemInfo = await fs.statSync(itemPath);
      const isDir = itemInfo.isDirectory();
      if (isDir) {
        const children = await this.listAllDir(itemPath);
        const single: DirTree = {
          ...itemInfo,
          name: item,
          children,
        };
        result.push(single);
      }
    }
    return result;
  }

  async createFile(file: any, dir: string): Promise<boolean> {
    const fileDir = this.getFilePath(dir);

    try {
      await fs.statSync(fileDir);
    } catch (error) {
      await fs.mkdirSync(fileDir, { recursive: true });
    }

    const filePath = path.join(this.basePath, dir, file.originalname);
    await fs.writeFileSync(filePath, file.buffer);
    return true;
  }

  updateFile(
    file: any,
    name: string,
    dir: string,
    start: number,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const fileDir = path.join(this.basePath, dir, name);

      const fileStream = fs.createWriteStream(fileDir, { flags: 'a+', start });
      fileStream.write(file.buffer);
      fileStream.close();

      fileStream.on('error', err => {
        fileStream.end();
        reject(err);
      });

      fileStream.on('close', () => {
        resolve(true);
      });
    });
  }

  async uploadFileDone(name: string, dir: string): Promise<boolean> {
    const newName = name.slice(1);
    const oldFilePath = path.join(this.basePath, dir, name);
    const newFilePath = path.join(this.basePath, dir, newName);

    await fs.renameSync(oldFilePath, newFilePath);
    return true;
  }

  async clearUploadingFile(data: Upload[]): Promise<boolean> {
    const filePathArr = data.map(item => path.join(item.directory, item.name));
    return await this.remove(filePathArr);
  }
}
