// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/model/animate';
import ExportBlog from '../../../app/model/blog';
import ExportCategory from '../../../app/model/category';
import ExportCloud from '../../../app/model/cloud';
import ExportComic from '../../../app/model/comic';
import ExportComment from '../../../app/model/comment';
import ExportConfig from '../../../app/model/config';
import ExportDanmu from '../../../app/model/danmu';
import ExportData from '../../../app/model/data';
import ExportEposide from '../../../app/model/eposide';
import ExportHistory from '../../../app/model/history';
import ExportKey from '../../../app/model/key';
import ExportOrder from '../../../app/model/order';
import ExportPost from '../../../app/model/post';
import ExportRate from '../../../app/model/rate';
import ExportRecord from '../../../app/model/record';
import ExportRelation from '../../../app/model/relation';
import ExportReport from '../../../app/model/report';
import ExportSeason from '../../../app/model/season';
import ExportShop from '../../../app/model/shop';
import ExportSource from '../../../app/model/source';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Animate: ReturnType<typeof ExportAnimate>;
    Blog: ReturnType<typeof ExportBlog>;
    Category: ReturnType<typeof ExportCategory>;
    Cloud: ReturnType<typeof ExportCloud>;
    Comic: ReturnType<typeof ExportComic>;
    Comment: ReturnType<typeof ExportComment>;
    Config: ReturnType<typeof ExportConfig>;
    Danmu: ReturnType<typeof ExportDanmu>;
    Data: ReturnType<typeof ExportData>;
    Eposide: ReturnType<typeof ExportEposide>;
    History: ReturnType<typeof ExportHistory>;
    Key: ReturnType<typeof ExportKey>;
    Order: ReturnType<typeof ExportOrder>;
    Post: ReturnType<typeof ExportPost>;
    Rate: ReturnType<typeof ExportRate>;
    Record: ReturnType<typeof ExportRecord>;
    Relation: ReturnType<typeof ExportRelation>;
    Report: ReturnType<typeof ExportReport>;
    Season: ReturnType<typeof ExportSeason>;
    Shop: ReturnType<typeof ExportShop>;
    Source: ReturnType<typeof ExportSource>;
    User: ReturnType<typeof ExportUser>;
  }
}
