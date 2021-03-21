import { HttpStatus, HttpException } from '@nestjs/common';
import { CodeMsg } from './errorCode';

export class BusinessException extends HttpException {
  information: CodeMsg;
  constructor(message: CodeMsg) {
    super(message, HttpStatus.OK);
    this.information = message;
  }
}
