import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { QueryDto } from './dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  async find(@Query() query: QueryDto) {
    return await this.historyService.find(query);
  }
}
