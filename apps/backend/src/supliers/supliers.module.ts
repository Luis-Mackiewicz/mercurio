import { Module } from '@nestjs/common';
import { SupliersService } from './supliers.service';
import { SupliersController } from './supliers.controller';

@Module({
  controllers: [SupliersController],
  providers: [SupliersService],
})
export class SupliersModule {}
