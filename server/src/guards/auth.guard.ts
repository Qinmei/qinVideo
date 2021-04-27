import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { BusinessException, ErrorCode } from 'src/exceptions';

@Injectable()
export class AuthGuard extends PassportAuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  getReflectMetaData<T>(context: ExecutionContext, propKey: string): T {
    const methodsValue = this.reflector.get<T>(propKey, context.getHandler());
    const controllerValue = this.reflector.get<T>(propKey, context.getClass());
    return methodsValue || controllerValue;
  }

  handleRequest(
    error: Error | null,
    data,
    info: Error,
    context: ExecutionContext,
  ) {
    const noAuth = this.getReflectMetaData<boolean>(context, 'noAuth');
    const noToken = this.getReflectMetaData<boolean>(context, 'noToken');

    if (noToken) return false;

    if (info?.message === 'jwt expired') {
      throw new BusinessException(ErrorCode.TokenExpired);
    }

    if (!noAuth && (error || !data || info)) {
      throw new UnauthorizedException();
    }

    return data;
  }
}
