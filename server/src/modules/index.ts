import { CommonModule } from './common/common.module';
import { VideosModule } from './videos/videos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

const AllModules = [CommonModule, AuthModule, VideosModule, UsersModule];

export { AllModules };
