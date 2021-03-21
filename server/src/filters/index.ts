import { BusinessExceptionFilter } from './business-exception.filter';
import { HttpExceptionFilter } from './http-exception.filter';
import { GlobalExceptionsFilter } from './global-exception.filter';

import { APP_FILTER } from '@nestjs/core';

const AllFilters = [
  {
    provide: APP_FILTER,
    useClass: GlobalExceptionsFilter,
  },
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  {
    provide: APP_FILTER,
    useClass: BusinessExceptionFilter,
  },
];

export { AllFilters };
