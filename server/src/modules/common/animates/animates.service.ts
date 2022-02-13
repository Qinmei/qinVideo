import { Like, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QueryDto } from './dto';
import { Animate } from './animates.entity';

@Injectable()
export class AnimatesService {
  constructor(
    @InjectRepository(Animate)
    private readonly animatesRepository: Repository<Animate>,
  ) {}

  public async query(data: QueryDto) {
    const { page, size, sortBy, sortOrder, query } = data;
    const [list, total] = await this.animatesRepository.findAndCount({
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

  public async create(data: Partial<Animate>): Promise<any | undefined> {
    return await this.animatesRepository.save(data);
  }

  public async update(
    ids: string | string[],
    data: Partial<Animate>,
  ): Promise<any | undefined> {
    return await this.animatesRepository.update(ids, data);
  }

  public async delete(ids: string | string[]): Promise<any | undefined> {
    return await this.animatesRepository.delete(ids);
  }

  public async clear(): Promise<any | undefined> {
    return await this.animatesRepository.clear();
  }
}
