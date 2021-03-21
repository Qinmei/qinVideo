import {
  Injectable,
  BadRequestException,
  ValidationPipe,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const showErrors = this.loopError(errors);
        return new BadRequestException(showErrors.join(', '));
      },
    });
  }

  private loopError(errors: ValidationError[]) {
    const showArr: string[] = [];
    errors.map(item => {
      if (item.children && item.children.length > 0) {
        const childrenArr = this.loopError(item.children);
        showArr.push(...childrenArr);
      }
      const constraints = Object.values(item.constraints);
      showArr.push(...constraints);
    });

    return showArr;
  }
}
