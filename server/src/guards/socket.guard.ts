import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SettingService } from '../modules/setting/setting.service';

@Injectable()
export class SocketGuard implements CanActivate {
  constructor(private readonly settingService: SettingService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { handshake } = context.switchToWs().getClient();
    const {
      query: { token },
    } = handshake;

    if (token) {
      const user = await this.settingService.validateToken(token);
      if (user) {
        this.settingService.refreshToken();
        return true;
      }
    }

    return false;
  }
}
