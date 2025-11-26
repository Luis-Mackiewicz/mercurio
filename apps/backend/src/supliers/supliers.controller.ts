import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupliersService } from './supliers.service';
import { CreateSuplierDto } from './dto/create-suplier.dto';
import { UpdateSuplierDto } from './dto/update-suplier.dto';

@Controller('supliers')
export class SupliersController {
  constructor(private readonly supliersService: SupliersService) {}

  @Post()
  create(@Body() createSuplierDto: CreateSuplierDto) {
    return this.supliersService.create(createSuplierDto);
  }

  @Get()
  findAll() {
    return this.supliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supliersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuplierDto: UpdateSuplierDto) {
    return this.supliersService.update(+id, updateSuplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supliersService.remove(+id);
  }
}
