import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateDto {
  @IsString()
  readonly hash: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly directory: string;

  @IsNumber()
  readonly size: number;

  @IsBoolean()
  readonly force: boolean = false;
}
