import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eposide } from './eposides.entity';

import { EposidesController } from './eposides.controller';
import { EposidesService } from './eposides.service';

@Module({
  imports: [TypeOrmModule.forFeature([Eposide])],
  providers: [EposidesService],
  controllers: [EposidesController],
})
export class EposidesModule {}
