import { IsString, IsOptional, IsBoolean } from 'class-validator';
export class CreateDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsBoolean()
  @IsOptional()
  updating: boolean;
}
