import { IsNumber, IsPositive } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateTableDto{
    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'O número do imóvel',
        example: 1,
    })
    number: number;
}