import { Injectable } from "@nestjs/common";

@Injectable()
export class TableService{
    findAll() {
        return 'Buscar todos os imóveis'
    }
    create() {
        return 'Adicionar um imóvel'
    }
}