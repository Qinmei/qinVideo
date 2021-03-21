import { SetMetadata } from '@nestjs/common';

export const NoAuth = (noAuth: boolean) => SetMetadata('noAuth', noAuth);
