import { IsString } from 'class-validator';

export class UpdateDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;
}
