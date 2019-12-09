import * as crypto from 'crypto';
import * as fs from 'fs';

export const MD5 = (text: string) =>
  crypto
    .createHash('md5')
    .update(text)
    .digest('hex');

export const sleep = (time = 5000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const readJSON = (path) => {
  const data = fs.readFileSync(path);
  const result = JSON.parse(data.toString());
  return result;
};
