import {
  IsString,
  IsOptional,
  IsEnum,
  MinLength,
  IsEmail,
  IsInt,
  IsBoolean,
} from 'class-validator';
import { UserStatus } from 'src/enums';

export class UpdateDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly name: string;

  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  readonly password: string;

  @IsInt()
  @IsOptional()
  readonly level: number;

  @IsInt()
  @IsOptional()
  readonly score: number;

  @IsString()
  @IsOptional()
  readonly avatar: string;

  @IsString()
  @IsOptional()
  readonly background: string;

  @IsString()
  @IsOptional()
  readonly introduce: string;

  @IsInt()
  @IsOptional()
  readonly money: number;

  @IsInt()
  @IsOptional()
  readonly expired: number;

  @IsEnum(UserStatus)
  @IsOptional()
  readonly status: UserStatus;

  @IsBoolean()
  @IsOptional()
  readonly admin: boolean;
}
