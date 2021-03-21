import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from '../setting/setting.entity';
import { History } from '../history/history.entity';
import { Upload } from '../upload/upload.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/modules/basis/sqlite/db.sqlite',
      entities: [Setting, History, Upload],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
