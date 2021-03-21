import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';

const AllGuards = [
  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
];

export { AllGuards };
