import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário',
  })
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'ID dos produtos',
  })
  products: string[];
}
