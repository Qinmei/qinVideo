import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';

import { UserMiddleware } from './user.middleware';

const AllMiddleware = [
  helmet(),
  // rateLimit({
  //   windowMs: 15 * 60 * 1000,
  //   max: 100,
  // }),
  compression(),
  UserMiddleware,
];

export { AllMiddleware };
