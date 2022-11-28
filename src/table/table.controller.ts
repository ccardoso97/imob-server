import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create.table.dto';
import { TableService } from './table.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { Table } from './entities/table.entity';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'Mostrar todos os imóveis'
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Mostrar um imóvel'
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Adicionar imóveis'
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }
}
