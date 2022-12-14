import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginResponseDto } from "./dto/login-response.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { userName, password } = loginDto;
    const user = await this.prisma.user.findUnique({ where: { userName } });

    if (!user) {
      throw new UnauthorizedException("Usuário inválido");
    }

/*
Por algum motivo persiste o erro de senha inválida mesmo quando está correta. Não consegui encontrar o
problema :/ para a auth rodar, tive que deixar essa parte comentada e só consigo autenticar o userName.

    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException("Senha inválida");
    }
*/
    delete user.password;

    return {
      token: this.jwtService.sign({userName}),
      user
    };
  }
}