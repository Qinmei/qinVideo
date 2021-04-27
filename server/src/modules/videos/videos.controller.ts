import { Controller, Get, Query, Request } from '@nestjs/common';
import { NoAuth, NoToken } from 'src/decorators';
import { QueryDto } from './dto';

@NoToken()
@Controller('videos')
export class VideosController {
  @Get()
  async find(@Query() query: QueryDto, @Request() req) {
    // console.log(req)
    // console.log(req.user);
    console.log('jwt controller', req.user);
    return 'sdsds';
  }
}
