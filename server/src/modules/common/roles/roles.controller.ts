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
import { NoToken } from 'src/decorators';
import { CreateDto, ParamDto, QueryDto, UpdateDto } from './dto';
import { RolesService } from './roles.service';

@NoToken()
@Controller('videos')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async find(@Query() query: QueryDto) {
    return await this.rolesService.query(query);
  }

  @Post()
  async create(@Body() body: CreateDto) {
    return await this.rolesService.create(body);
  }

  @Put(':id')
  async update(@Param() param: ParamDto, @Body() body: UpdateDto) {
    const { id } = param;
    return await this.rolesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param() param: ParamDto) {
    const { id } = param;
    return await this.rolesService.delete(id);
  }
}
