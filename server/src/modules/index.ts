import { BaseModule } from './base/base.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';

const AllModules = [BaseModule, AuthModule, CommonModule];

export { AllModules };
