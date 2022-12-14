import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Username usado no login",
    example: "caiocardoso123"
  })
  userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Senha usada no login",
    example: "Abcd@1234"
  })
  password: string;
}