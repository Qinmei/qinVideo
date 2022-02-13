import { IsString, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { MediaStatus } from 'src/enums';

export class UpdateDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
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
