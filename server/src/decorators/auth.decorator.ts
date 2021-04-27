import { SetMetadata } from '@nestjs/common';

export const NoAuth = (value = true) => SetMetadata('noAuth', value);

export const NoToken = (value = true) => SetMetadata('noToken', value);
