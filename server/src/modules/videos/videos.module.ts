import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';

@Module({
  imports: [],
  exports: [],
  providers: [],
  controllers: [VideosController],
})
export class VideosModule {}
