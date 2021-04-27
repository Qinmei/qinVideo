import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor() {}

  async use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;
    if (token) {
      // const user = await this.settingService.validateToken(token);
      // if (user) {
      //   this.settingService.refreshToken();
      // }
      // req.user = user;
    }

    next();
  }
}
