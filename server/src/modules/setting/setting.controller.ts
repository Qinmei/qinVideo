import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingService } from './setting.service';
import { UpdateDto, LoginDto } from './dto';
import { NoAuth } from '../../decorators';
import { BusinessException, ErrorCode } from '../../exceptions';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Post('login')
  @NoAuth(true)
  async login(@Body() loginData: LoginDto) {
    const userInfo = await this.settingService.validateUser(loginData);

    if (!userInfo) {
      throw new BusinessException(ErrorCode.PassError);
    }

    const token = await this.settingService.generateToken();
    return { token };
  }

  @Get()
  async find() {
    return await this.settingService.find();
  }

  @Post()
  async update(@Body() updateSettingDto: UpdateDto) {
    const result = await this.settingService.find();
    if (result) {
      return await this.settingService.update(result.id, updateSettingDto);
    }
    return await this.settingService.create(updateSettingDto);
  }
}
