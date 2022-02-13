import { IsString, IsOptional, IsEnum, IsInt } from 'class-validator';
import { MediaStatus } from 'src/enums';

export class UpdateDto {
  @IsString()
  @IsOptional()
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
  @IsOptional()
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
