import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty()
  readonly params: string;

  @ApiProperty()
  readonly status: number;

  @ApiProperty()
  readonly uid: string;

  @ApiProperty()
  readonly mxaddress: string;
}
