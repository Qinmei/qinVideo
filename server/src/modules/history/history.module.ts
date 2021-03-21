import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { History } from './history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  exports: [HistoryService],
  providers: [HistoryService],
  controllers: [HistoryController],
})
export class HistoryModule {}
