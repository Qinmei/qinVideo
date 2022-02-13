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
import { AnimatesService } from './animates.service';

@NoToken()
@Controller('animates')
export class AnimatesController {
  constructor(private readonly animatesService: AnimatesService) {}

  @Get()
  async find(@Query() query: QueryDto) {
    return await this.animatesService.query(query);
  }

  @Post()
  async create(@Body() body: CreateDto) {
    return await this.animatesService.create(body);
  }

  @Put(':id')
  async update(@Param() param: ParamDto, @Body() body: UpdateDto) {
    const { id } = param;
    return await this.animatesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param() param: ParamDto) {
    const { id } = param;
    return await this.animatesService.delete(id);
  }
}
