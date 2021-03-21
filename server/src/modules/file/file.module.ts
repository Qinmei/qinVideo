import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';

@Module({
  imports: [],
  exports: [FileService],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
