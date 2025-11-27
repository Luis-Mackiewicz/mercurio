// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiStatus() {
    return {
      status: 'OK',
      message: 'API rodando perfeitamente!',
      timestamp: new Date().toISOString(),
    };
  }
}
