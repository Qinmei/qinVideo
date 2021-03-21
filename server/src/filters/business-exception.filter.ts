import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { BusinessException } from '../exceptions';

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
  catch(exception: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const { code, msg } = exception.information;

    response.status(status).json({
      code,
      msg,
    });
  }
}
