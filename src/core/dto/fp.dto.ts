import { ApiProperty } from '@nestjs/swagger';

export class FpDto {
  @ApiProperty()
  readonly fp: string;
}
