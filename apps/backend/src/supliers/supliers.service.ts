import { Injectable } from '@nestjs/common';
import { CreateSuplierDto } from './dto/create-suplier.dto';
import { UpdateSuplierDto } from './dto/update-suplier.dto';

@Injectable()
export class SupliersService {
  create(createSuplierDto: CreateSuplierDto) {
    return 'This action adds a new suplier';
  }

  findAll() {
    return `This action returns all supliers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} suplier`;
  }

  update(id: number, updateSuplierDto: UpdateSuplierDto) {
    return `This action updates a #${id} suplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} suplier`;
  }
}
