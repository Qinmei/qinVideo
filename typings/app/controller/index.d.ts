// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/controller/animate';
import ExportComic from '../../../app/controller/comic';
import ExportConfig from '../../../app/controller/config';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    animate: ExportAnimate;
    comic: ExportComic;
    config: ExportConfig;
    user: ExportUser;
  }
}
