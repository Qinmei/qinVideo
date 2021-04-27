import { Controller, Get, Query, Request } from '@nestjs/common';
import { NoAuth, NoToken } from 'src/decorators';

@NoToken()
@Controller('auth')
export class AuthController {
  constructor() {}

  @Get()
  async find(@Query() query, @Request() req) {
    // console.log(req)
    // console.log(req.user);
    console.log('jwt controller', req.user);
    return 'sdsds';
  }
}
