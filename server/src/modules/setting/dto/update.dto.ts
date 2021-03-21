import { IsString, IsOptional } from 'class-validator';

export class UpdateDto {
  @IsOptional()
  @IsString()
  readonly username: string;

  @IsOptional()
  @IsString()
  readonly password: string;
}
