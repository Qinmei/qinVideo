import { NoToken } from 'src/decorators';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateDto, ParamDto, QueryDto, UpdateDto } from './dto';
import { EposidesService } from './eposides.service';

@NoToken()
@Controller('eposides')
export class EposidesController {
  constructor(private readonly eposidesService: EposidesService) {}

  @Get()
  async find(@Query() query: QueryDto) {
    return await this.eposidesService.query(query);
  }

  @Post()
  async create(@Body() body: CreateDto) {
    return await this.eposidesService.create(body);
  }

  @Put(':id')
  async update(@Param() param: ParamDto, @Body() body: UpdateDto) {
    const { id } = param;
    return await this.eposidesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param() param: ParamDto) {
    const { id } = param;
    return await this.eposidesService.delete(id);
  }
}
