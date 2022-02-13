import { Module } from '@nestjs/common';

import { AnimatesModule } from './animates/animates.module';
import { EposidesModule } from './eposides/eposides.module';
import { RolesModule } from './roles/roles.module';
import { SeriesModule } from './series/series.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    RolesModule,
    EposidesModule,
    AnimatesModule,
    SeriesModule,
  ],
})
export class CommonModule {}
