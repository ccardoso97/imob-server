import { Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create.table.dto";

@Injectable()
export class TableService{
    findAll() {
        return 'Buscar todos os imóveis'
    }
    create(createTableDto: CreateTableDto) {
        return 'Adicionar um imóvel: ' + JSON.stringify(createTableDto)
    }
}