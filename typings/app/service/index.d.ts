// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/service/animate';
import ExportComic from '../../../app/service/comic';
import ExportConfig from '../../../app/service/config';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    animate: ExportAnimate;
    comic: ExportComic;
    config: ExportConfig;
    user: ExportUser;
  }
}
