import { ApiProperty } from '@nestjs/swagger';

export class ClientDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
