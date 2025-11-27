import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class EventHandlerService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(EventHandlerService.name);
  private subscriber: Redis;

  onModuleInit() {
    this.logger.log('Iniciando o microserviço de eventos...');

    this.subscriber = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      password: process.env.REDIS_PASSWORD || undefined,
    });

    this.subscriber.subscribe('user_events_channel', (err, count) => {
      if (err) {
        this.logger.error(`Erro ao assinar canal: ${err.message}`);
        return;
      }
      this.logger.log(`Assinado ao canal. Ouvindo ${count} canal(is).`);
    });

    this.subscriber.on('message', (_, message) => {
      try {
        const payload = JSON.parse(message);
        this.logger.log(`Evento recebido: ${JSON.stringify(payload)}`);
      } catch {
        this.logger.error(`Falha ao parsear mensagem: ${message}`);
      }
    });
  }

  onModuleDestroy() {
    this.logger.log('Desconectando Redis...');
    this.subscriber?.unsubscribe();
    this.subscriber?.disconnect();
  }
}
