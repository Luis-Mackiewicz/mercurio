import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventHandlerService } from './event-handler/event-handler';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [EventHandlerService],
})
export class AppModule {}
