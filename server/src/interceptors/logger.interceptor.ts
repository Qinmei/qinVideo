import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HistoryService } from '../modules/history/history.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly historyService: HistoryService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const req = context.switchToHttp().getRequest<Request>();
        if (req.path !== '/api/v1/history') {
          const reqEndTime = Date.now();
          const responseTime = reqEndTime - now;
          this.historyService.create({
            methods: req.method,
            url: req.path,
            userAgent: req.headers['user-agent'],
            ip: req.ip,
            time: responseTime,
          });
        }
      }),
    );
  }
}
