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
import { SeriesService } from './series.service';

@NoToken()
@Controller('seriess')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async find(@Query() query: QueryDto) {
    return await this.seriesService.query(query);
  }

  @Post()
  async create(@Body() body: CreateDto) {
    return await this.seriesService.create(body);
  }

  @Put(':id')
  async update(@Param() param: ParamDto, @Body() body: UpdateDto) {
    const { id } = param;
    return await this.seriesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param() param: ParamDto) {
    const { id } = param;
    return await this.seriesService.delete(id);
  }
}
