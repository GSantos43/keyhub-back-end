import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ConfigEnv from '@nestjs/config';
import { RequestsModule } from './module/requests/requests.module';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { ClientsModule } from './module/clients/clients.module';

@Module({
  imports: [
    ConfigEnv.ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    KeycloakConnectModule.registerAsync({
      useFactory: (config: ConfigEnv.ConfigService) => ({
        authServerUrl: config.get<string>('KEYCLOAK_URL'),
        realm: config.get<string>('KEYCLOAK_REALM'),
        clientId: config.get<string>('KEYCLOAK_CLIENT_ID'),
        secret: '',
        bearerOnly: true,
      }),
      inject: [ConfigEnv.ConfigService]
    }),
    RequestsModule,
    ClientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
