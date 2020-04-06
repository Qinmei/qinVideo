// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
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
    animate: AutoInstanceType<typeof ExportAnimate>;
    blog: AutoInstanceType<typeof ExportBlog>;
    category: AutoInstanceType<typeof ExportCategory>;
    cloud: AutoInstanceType<typeof ExportCloud>;
    comic: AutoInstanceType<typeof ExportComic>;
    comment: AutoInstanceType<typeof ExportComment>;
    config: AutoInstanceType<typeof ExportConfig>;
    danmu: AutoInstanceType<typeof ExportDanmu>;
    data: AutoInstanceType<typeof ExportData>;
    eposide: AutoInstanceType<typeof ExportEposide>;
    history: AutoInstanceType<typeof ExportHistory>;
    key: AutoInstanceType<typeof ExportKey>;
    order: AutoInstanceType<typeof ExportOrder>;
    post: AutoInstanceType<typeof ExportPost>;
    rate: AutoInstanceType<typeof ExportRate>;
    record: AutoInstanceType<typeof ExportRecord>;
    relation: AutoInstanceType<typeof ExportRelation>;
    report: AutoInstanceType<typeof ExportReport>;
    season: AutoInstanceType<typeof ExportSeason>;
    shop: AutoInstanceType<typeof ExportShop>;
    source: AutoInstanceType<typeof ExportSource>;
    sourceInit: AutoInstanceType<typeof ExportSourceInit>;
    tools: AutoInstanceType<typeof ExportTools>;
    upload: AutoInstanceType<typeof ExportUpload>;
    user: AutoInstanceType<typeof ExportUser>;
    utils: AutoInstanceType<typeof ExportUtils>;
  }
}
