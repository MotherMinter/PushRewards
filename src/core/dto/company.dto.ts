import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
  @ApiProperty()
  readonly params: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly status: number;

  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly protected: boolean;

  @ApiProperty()
  readonly uid: string;

  @ApiProperty()
  readonly mxaddress: string;

  @ApiProperty()
  readonly emailList: string[];
}
