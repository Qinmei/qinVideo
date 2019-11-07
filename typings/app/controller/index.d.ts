// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBackendAnimate from '../../../app/controller/backend/animate';
import ExportBackendCategory from '../../../app/controller/backend/category';
import ExportBackendCloud from '../../../app/controller/backend/cloud';
import ExportBackendComic from '../../../app/controller/backend/comic';
import ExportBackendComment from '../../../app/controller/backend/comment';
import ExportBackendConfig from '../../../app/controller/backend/config';
import ExportBackendDanmu from '../../../app/controller/backend/danmu';
import ExportBackendData from '../../../app/controller/backend/data';
import ExportBackendEposide from '../../../app/controller/backend/eposide';
import ExportBackendKey from '../../../app/controller/backend/key';
import ExportBackendOrder from '../../../app/controller/backend/order';
import ExportBackendPost from '../../../app/controller/backend/post';
import ExportBackendReport from '../../../app/controller/backend/report';
import ExportBackendSeason from '../../../app/controller/backend/season';
import ExportBackendShop from '../../../app/controller/backend/shop';
import ExportBackendTest from '../../../app/controller/backend/test';
import ExportBackendTools from '../../../app/controller/backend/tools';
import ExportBackendUploads from '../../../app/controller/backend/uploads';
import ExportBackendUser from '../../../app/controller/backend/user';
import ExportFrontendData from '../../../app/controller/frontend/data';
import ExportFrontendUser from '../../../app/controller/frontend/user';

declare module 'egg' {
  interface IController {
    backend: {
      animate: ExportBackendAnimate;
      category: ExportBackendCategory;
      cloud: ExportBackendCloud;
      comic: ExportBackendComic;
      comment: ExportBackendComment;
      config: ExportBackendConfig;
      danmu: ExportBackendDanmu;
      data: ExportBackendData;
      eposide: ExportBackendEposide;
      key: ExportBackendKey;
      order: ExportBackendOrder;
      post: ExportBackendPost;
      report: ExportBackendReport;
      season: ExportBackendSeason;
      shop: ExportBackendShop;
      test: ExportBackendTest;
      tools: ExportBackendTools;
      uploads: ExportBackendUploads;
      user: ExportBackendUser;
    }
    frontend: {
      data: ExportFrontendData;
      user: ExportFrontendUser;
    }
  }
}
