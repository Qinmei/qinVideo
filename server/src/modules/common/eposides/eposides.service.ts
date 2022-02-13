import { Like, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QueryDto } from './dto';
import { Eposide } from './eposides.entity';

@Injectable()
export class EposidesService {
  constructor(
    @InjectRepository(Eposide)
    private readonly eposidesRepository: Repository<Eposide>,
  ) {}

  public async query(data: QueryDto) {
    const { page, size, sortBy, sortOrder, query } = data;
    const [list, total] = await this.eposidesRepository.findAndCount({
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

  public async create(data: Partial<Eposide>): Promise<any | undefined> {
    return await this.eposidesRepository.save(data);
  }

  public async update(
    ids: string | string[],
    data: Partial<Eposide>,
  ): Promise<any | undefined> {
    return await this.eposidesRepository.update(ids, data);
  }

  public async delete(ids: string | string[]): Promise<any | undefined> {
    return await this.eposidesRepository.delete(ids);
  }

  public async clear(): Promise<any | undefined> {
    return await this.eposidesRepository.clear();
  }
}
