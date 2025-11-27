import { Injectable } from '@nestjs/common';
import type { CreateEnterpriseDTO } from './dto/create-enterprise.dto';
import type { UpdateEnterpriseDTO } from './dto/update-enterprise.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EnterpriseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnterpriseDto: CreateEnterpriseDTO) {
    return this.prisma.enterprise.create({
      data: {
        ...createEnterpriseDto,
      },
    });
  }

  async findAll() {
    return this.prisma.enterprise.findMany();
  }

  async findOne(id: string) {
    return this.prisma.enterprise.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateEnterpriseDto: UpdateEnterpriseDTO) {
    return this.prisma.enterprise.update({
      where: { id },
      data: updateEnterpriseDto,
    });
  }

  async remove(id: string) {
    return this.prisma.enterprise.delete({
      where: { id },
    });
  }
}
