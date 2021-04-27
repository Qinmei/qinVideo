import { Module } from '@nestjs/common';
import { CustomConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CustomConfigModule, DatabaseModule],
})
export class CommonModule {}
