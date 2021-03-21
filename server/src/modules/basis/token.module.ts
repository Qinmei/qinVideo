import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { Config } from '../../config';

@Module({
  imports: [
    JwtModule.register({
      secret: Config.JwtSecret,
      signOptions: { expiresIn: Config.JwtExpired },
    }),
  ],
  exports: [JwtModule],
})
export class TokenModule {}
