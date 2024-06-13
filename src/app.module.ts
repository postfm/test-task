import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmoModule } from 'amocrm-nestjs';

@Module({
  imports: [
    AmoModule.forRoot({
      href: 'https://***.amocrm.ru/',
      client_id: '***-***-***-***-***',
      client_secret: '***',
      redirect_uri: 'https://***.amocrm.ru/',
      code: '***',
      access_token: '***',
      refresh_token: '***',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
