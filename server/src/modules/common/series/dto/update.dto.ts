import { IsString, IsOptional } from 'class-validator';

export class UpdateDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  description: string;
}
