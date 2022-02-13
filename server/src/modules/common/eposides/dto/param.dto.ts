import { IsString } from 'class-validator';

export class ParamDto {
  @IsString()
  readonly id: string;
}
