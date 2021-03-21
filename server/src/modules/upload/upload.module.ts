import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingModule } from '../index';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { Upload } from './upload.entity';
import { UploadGateway } from './upload.gateway';
import { FileModule, TokenModule } from '../index';

@Module({
  imports: [
    TypeOrmModule.forFeature([Upload]),
    TokenModule,
    FileModule,
    SettingModule,
  ],
  exports: [UploadService],
  providers: [UploadService, UploadGateway],
  controllers: [UploadController],
})
export class UploadModule {}
