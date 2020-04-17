import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  readonly brand: string;

  @ApiProperty()
  readonly logo;
}
