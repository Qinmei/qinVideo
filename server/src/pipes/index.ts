import { APP_PIPE } from '@nestjs/core';

import { CustomValidationPipe } from './validation.pipe';

const AllPipes = [
  {
    provide: APP_PIPE,
    useClass: CustomValidationPipe,
  },
];

export { CustomValidationPipe, AllPipes };
