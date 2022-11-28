import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create.table.dto';
import { TableService } from './table.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  findAll() {
    return this.tableService.findAll();
  }

  @Post()
  create(@Body() dto: CreateTableDto) {
    return this.tableService.create(dto);
  }
}
