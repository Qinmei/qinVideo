import * as fs from 'fs';

export interface FileItem extends fs.Stats {
  type: string;
  name: string;
}

export interface ParamsData {
  [propName: string]: string;
}

export interface RenameParamsData {
  file: string;
}

export interface DeleteBatchData {
  files: string[];
}

export interface RenameData {
  oldPath: string;
  newPath: string;
}

export interface RenameDataArr {
  files: RenameData[];
}

export interface CopyOrMove {
  type: 'copy' | 'move';
  files: RenameData[];
}

export interface DirTree extends fs.Stats {
  name: string;
  children?: DirTree[];
}
