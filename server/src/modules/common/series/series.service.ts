import { Like, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QueryDto } from './dto';
import { Series } from './series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
  ) {}

  public async query(data: QueryDto) {
    const { page, size, sortBy, sortOrder, query } = data;
    const [list, total] = await this.seriesRepository.findAndCount({
      where: {
        name: Like(`%${query}%`),
      },
      skip: (page - 1) * size,
      take: size,
      order: {
        [sortBy]: sortOrder,
      },
    });
    return { list, total };
  }

  public async create(data: Partial<Series>): Promise<any | undefined> {
    return await this.seriesRepository.save(data);
  }

  public async update(
    ids: string | string[],
    data: Partial<Series>,
  ): Promise<any | undefined> {
    return await this.seriesRepository.update(ids, data);
  }

  public async delete(ids: string | string[]): Promise<any | undefined> {
    return await this.seriesRepository.delete(ids);
  }

  public async clear(): Promise<any | undefined> {
    return await this.seriesRepository.clear();
  }
}
