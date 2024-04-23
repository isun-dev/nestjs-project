import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `RETURN #${id}`;
  }

  @Post()
  create(@Body() creatCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

}
