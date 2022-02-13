import { IsString, IsOptional, IsEnum, MinLength } from 'class-validator';
import { Authority } from 'src/enums';

export class UpdateDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly name: string;

  @IsEnum(Authority, { each: true })
  @IsOptional()
  readonly authority: Authority[];

  @IsString()
  @IsOptional()
  readonly description: string;
}
