import { IsNumber, IsIn, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryDto {
  @IsNumber()
  @Type(() => Number)
  readonly page: number = 1;

  @IsNumber()
  @Type(() => Number)
  @Min(5)
  @Max(50)
  readonly size: number = 10;

  @IsIn(['DESC', 'ASC'])
  readonly sortOrder: string = 'DESC';

  @IsIn(['id', 'updatedAt'])
  readonly sortBy: string = 'id';
}
