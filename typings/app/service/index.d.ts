// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/service/animate';
import ExportCategory from '../../../app/service/category';
import ExportComic from '../../../app/service/comic';
import ExportComment from '../../../app/service/comment';
import ExportConfig from '../../../app/service/config';
import ExportDanmu from '../../../app/service/danmu';
import ExportData from '../../../app/service/data';
import ExportEposide from '../../../app/service/eposide';
import ExportHistory from '../../../app/service/history';
import ExportKey from '../../../app/service/key';
import ExportOrder from '../../../app/service/order';
import ExportPost from '../../../app/service/post';
import ExportRelation from '../../../app/service/relation';
import ExportReport from '../../../app/service/report';
import ExportShop from '../../../app/service/shop';
import ExportUpload from '../../../app/service/upload';
import ExportUser from '../../../app/service/user';
import ExportUtils from '../../../app/service/utils';

declare module 'egg' {
  interface IService {
    animate: ExportAnimate;
    category: ExportCategory;
    comic: ExportComic;
    comment: ExportComment;
    config: ExportConfig;
    danmu: ExportDanmu;
    data: ExportData;
    eposide: ExportEposide;
    history: ExportHistory;
    key: ExportKey;
    order: ExportOrder;
    post: ExportPost;
    relation: ExportRelation;
    report: ExportReport;
    shop: ExportShop;
    upload: ExportUpload;
    user: ExportUser;
    utils: ExportUtils;
  }
}
