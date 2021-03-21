import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from './setting.entity';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { Config } from '../../config';

@Injectable()
export class SettingService implements OnModuleInit {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
    private readonly jwtService: JwtService,
  ) { }

  async onModuleInit() {
    const result = await this.find();
    if (!result) {
      await this.create({
        username: Config.defaultUserName,
        password: Config.defaultPassword,
      });
    }
  }

  async validateUser(user: Partial<Setting>): Promise<undefined | Setting> {
    const result = await this.settingRepository.findOne(user);
    return result;
  }

  async validateToken(token: string): Promise<boolean> {
    const nowTime = new Date().getTime();
    const setting = await this.find();
    return setting && setting.token === token && setting.expired > nowTime;
  }

  async generateToken(): Promise<string> {
    const nowTime = new Date().getTime();
    const token = uuidv4();
    const setting = await this.find();

    await this.update(setting.id, {
      expired: nowTime + Config.tokenExpired,
      token,
    });

    return token;
  }

  async refreshToken() {
    const nowTime = new Date().getTime();
    const setting = await this.find();

    await this.update(setting.id, {
      expired: nowTime + Config.tokenExpired,
    });
  }

  async find(): Promise<Setting | undefined> {
    return await this.settingRepository.findOne();
  }

  async create(data: Partial<Setting>): Promise<any | undefined> {
    return await this.settingRepository.save(data);
  }

  async update(id: number, data: Partial<Setting>): Promise<any | undefined> {
    return await this.settingRepository.update(id, data);
  }

  async clear(): Promise<any | undefined> {
    return await this.settingRepository.clear();
  }
}
