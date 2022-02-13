import {
  IsString,
  IsOptional,
  IsEnum,
  MinLength,
  IsEmail,
  IsBoolean,
  IsInt,
} from 'class-validator';
import { UserStatus } from 'src/enums';

export class CreateDto {
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
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
  readonly description: string;

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
