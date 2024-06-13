import { Injectable } from '@nestjs/common';
import { AmoService } from 'amocrm-nestjs';

@Injectable()
export class AppService {
  constructor(private readonly amoService: AmoService) {
    (async () => {
      // Получим информацию по аккаунту
      const account = await this.amoService.getAccount();
      console.log(account);
    })();
  }
}
