import * as MD5 from 'MD5';
import { generateUUID } from 'src/utils';
import { Like, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';

import { QueryDto } from './dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {}

  private initToken = (password: string) => {
    const refreshToken = generateUUID();
    const salt = this.configService.get('config.salt');
    const passwordToken = MD5(salt + password);
    return { refreshToken, password: passwordToken };
  };

  public async query(data: QueryDto) {
    const { page, size, sortBy, sortOrder, query } = data;
    const [list, total] = await this.usersRepository.findAndCount({
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

  public async create(data: Partial<User>): Promise<any | undefined> {
    const token = this.initToken(data.password);
    return await this.usersRepository.save({ ...data, ...token });
  }

  public async update(
    ids: string | string[],
    data: Partial<User>,
  ): Promise<any | undefined> {
    return await this.usersRepository.update(ids, data);
  }

  public async delete(ids: string | string[]): Promise<any | undefined> {
    return await this.usersRepository.delete(ids);
  }

  public async clear(): Promise<any | undefined> {
    return await this.usersRepository.clear();
  }
}
