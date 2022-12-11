import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Seu nome de usuário',
    example: 'caiocardoso123',
  })
  userName: string;

  @IsString()
  @ApiProperty({
    description: 'Seu nome',
    example: 'Caio Cardoso',
  })
  name: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'Sua senha',
    example: 'Abcd1234',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Confirme sua senha',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Seu avatar',
    example: 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg',
  })
  image: string;
}
