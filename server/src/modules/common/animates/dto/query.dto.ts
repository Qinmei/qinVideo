import { IsNumber, IsIn, Max, Min, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryDto {
  @IsString()
  readonly query: string = '';

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  readonly page: number = 1;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  readonly size: number = 10;

  @IsIn(['DESC', 'ASC'])
  readonly sortOrder: string = 'DESC';

  @IsIn(['id', 'createdAt', 'time', 'url'])
  readonly sortBy: string = 'id';
}
