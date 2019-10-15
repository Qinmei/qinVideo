// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/middleware/auth';
import ExportData from '../../../app/middleware/data';
import ExportErrorHandler from '../../../app/middleware/error_handler';

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    data: typeof ExportData;
    errorHandler: typeof ExportErrorHandler;
  }
}
