import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";
export class CreateOrderProductDto {
    @IsUUID()
    @ApiProperty({
        description: 'ID do imóvel',
        example: '7000d25a-53a4-45a0-9fd0-0be63e451e89'
    })
    productId: string;

    @IsInt()
    @IsPositive()
    @ApiProperty({
        description: 'Quantidade de imóveis',
        example: 1
    })
    quantity: number;

    @IsString()
    @ApiProperty({
        description: 'Proposta de valor ou dúvidas',
        example: '"Gostaria de pagar R$100 de aluguel" ou "Aceita pets?"'
    })
    description: string;
}