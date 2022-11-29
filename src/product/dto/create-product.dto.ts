import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'O título do anúncio',
    example: 'Casa de 02 quartos',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Endereço do imóvel',
    example: 'Rua A, Apto.201',
  })
  address: string;
  
  @IsNumber()
  @ApiProperty({
    description: 'Valor do aluguel',
    example: 99.9,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Foto da fachada',
    example: 'https://casa.abril.com.br/wp-content/uploads/2022/05/fachadas-como-ter-projeto-pratico-seguro-e-marcante-henrique-ribeiro-fachada-contemporanea-tijolinho-pe-direito-duplo-varandas.jpg?quality=95&strip=info&w=1024',
  })
  @IsUrl()
  image: string;
}
