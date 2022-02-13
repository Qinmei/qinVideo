import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animate } from './animates.entity';

import { AnimatesController } from './animates.controller';
import { AnimatesService } from './animates.service';

@Module({
  imports: [TypeOrmModule.forFeature([Animate])],
  providers: [AnimatesService],
  controllers: [AnimatesController],
})
export class AnimatesModule {}
