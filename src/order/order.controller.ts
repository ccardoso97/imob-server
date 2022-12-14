import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@ApiTags('order')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um pedido"
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({
    summary: "Exibir todos os pedido"
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Vizualizar um pedido"
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}
