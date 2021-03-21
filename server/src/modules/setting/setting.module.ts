import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { Setting } from './setting.entity';
import { TokenModule } from '../basis/token.module';

@Module({
  imports: [TypeOrmModule.forFeature([Setting]), TokenModule],
  exports: [SettingService],
  providers: [SettingService],
  controllers: [SettingController],
})
export class SettingModule {}
