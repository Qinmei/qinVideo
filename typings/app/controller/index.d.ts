// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBackendAnimate from '../../../app/controller/backend/animate';
import ExportBackendCategory from '../../../app/controller/backend/category';
import ExportBackendComic from '../../../app/controller/backend/comic';
import ExportBackendComment from '../../../app/controller/backend/comment';
import ExportBackendConfig from '../../../app/controller/backend/config';
import ExportBackendDanmu from '../../../app/controller/backend/danmu';
import ExportBackendEposide from '../../../app/controller/backend/eposide';
import ExportBackendKey from '../../../app/controller/backend/key';
import ExportBackendPost from '../../../app/controller/backend/post';
import ExportBackendReport from '../../../app/controller/backend/report';
import ExportBackendShop from '../../../app/controller/backend/shop';
import ExportBackendUser from '../../../app/controller/backend/user';
import ExportFrontendUser from '../../../app/controller/frontend/user';

declare module 'egg' {
  interface IController {
    backend: {
      animate: ExportBackendAnimate;
      category: ExportBackendCategory;
      comic: ExportBackendComic;
      comment: ExportBackendComment;
      config: ExportBackendConfig;
      danmu: ExportBackendDanmu;
      eposide: ExportBackendEposide;
      key: ExportBackendKey;
      post: ExportBackendPost;
      report: ExportBackendReport;
      shop: ExportBackendShop;
      user: ExportBackendUser;
    }
    frontend: {
      user: ExportFrontendUser;
    }
  }
}
