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
import { UsersService } from './users.service';

@NoToken()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async find(@Query() query: QueryDto) {
    return await this.usersService.query(query);
  }

  @Post()
  async create(@Body() body: CreateDto) {
    return await this.usersService.create(body);
  }

  @Put(':id')
  async update(@Param() param: ParamDto, @Body() body: UpdateDto) {
    const { id } = param;
    return await this.usersService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param() param: ParamDto) {
    const { id } = param;
    return await this.usersService.delete(id);
  }
}
