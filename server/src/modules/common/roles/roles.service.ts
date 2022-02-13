import { Like, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QueryDto } from './dto';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  public async query(data: QueryDto) {
    const { page, size, sortBy, sortOrder, query } = data;
    const [list, total] = await this.rolesRepository.findAndCount({
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

  public async create(data: Partial<Role>): Promise<any | undefined> {
    return await this.rolesRepository.save({ ...data });
  }

  public async update(
    ids: string | string[],
    data: Partial<Role>,
  ): Promise<any | undefined> {
    return await this.rolesRepository.update(ids, data);
  }

  public async delete(ids: string | string[]): Promise<any | undefined> {
    return await this.rolesRepository.delete(ids);
  }

  public async clear(): Promise<any | undefined> {
    return await this.rolesRepository.clear();
  }
}
