import { IsString, IsOptional, IsEnum, MinLength } from 'class-validator';
import { Authority } from 'src/enums';

export class CreateDto {
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsEnum(Authority, { each: true })
  @IsOptional()
  readonly authority: Authority[];

  @IsString()
  @IsOptional()
  readonly description: string;
}
