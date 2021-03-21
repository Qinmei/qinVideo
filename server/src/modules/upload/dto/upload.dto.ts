import { IsArray, IsNumber } from 'class-validator';

export class UploadDto {
  @IsNumber()
  readonly start: number;

  @IsNumber()
  readonly end: number;

  @IsNumber()
  readonly size: number;
}
