// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/service/animate';
import ExportBlog from '../../../app/service/blog';
import ExportCategory from '../../../app/service/category';
import ExportCloud from '../../../app/service/cloud';
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
import ExportRate from '../../../app/service/rate';
import ExportRecord from '../../../app/service/record';
import ExportRelation from '../../../app/service/relation';
import ExportReport from '../../../app/service/report';
import ExportSeason from '../../../app/service/season';
import ExportShop from '../../../app/service/shop';
import ExportSource from '../../../app/service/source';
import ExportSourceInit from '../../../app/service/sourceInit';
import ExportTools from '../../../app/service/tools';
import ExportUpload from '../../../app/service/upload';
import ExportUser from '../../../app/service/user';
import ExportUtils from '../../../app/service/utils';

declare module 'egg' {
  interface IService {
    animate: ExportAnimate;
    blog: ExportBlog;
    category: ExportCategory;
    cloud: ExportCloud;
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
    rate: ExportRate;
    record: ExportRecord;
    relation: ExportRelation;
    report: ExportReport;
    season: ExportSeason;
    shop: ExportShop;
    source: ExportSource;
    sourceInit: ExportSourceInit;
    tools: ExportTools;
    upload: ExportUpload;
    user: ExportUser;
    utils: ExportUtils;
  }
}
