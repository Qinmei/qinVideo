import { IsString, IsOptional, IsEnum, IsInt } from 'class-validator';
import { MediaStatus } from 'src/enums';

export class CreateDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @IsOptional()
  readonly sort: number;

  @IsString()
  @IsOptional()
  readonly cover: string;

  @IsString({ each: true })
  @IsOptional()
  readonly preview: string[];

  @IsString()
  readonly source: string;

  @IsInt()
  @IsOptional()
  readonly money: number;

  @IsInt()
  @IsOptional()
  readonly expired: number;

  @IsEnum(MediaStatus)
  @IsOptional()
  readonly status: MediaStatus;
}
