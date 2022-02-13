import { IsString, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { MediaStatus } from 'src/enums';

export class CreateDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly slug: string;

  @IsString()
  @IsOptional()
  readonly cover: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsBoolean()
  @IsOptional()
  updating: boolean;

  @IsString()
  @IsOptional()
  playTime: string;

  @IsEnum(MediaStatus)
  @IsOptional()
  readonly status: MediaStatus;
}
