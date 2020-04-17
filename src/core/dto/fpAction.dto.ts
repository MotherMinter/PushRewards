import { ApiProperty } from '@nestjs/swagger';

export class FpActionDto {
  @ApiProperty()
  readonly fp: string;

  @ApiProperty()
  readonly uid: string;

  @ApiProperty()
  readonly apiKey: string;

  @ApiProperty()
  readonly params: {};
}
