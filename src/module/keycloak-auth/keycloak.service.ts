import { Injectable, InternalServerErrorException } from '@nestjs/common';
import KeycloakAdminClient from 'keycloak-admin-client';

@Injectable()
export class KeycloakAdminService {
  async getClient(): Promise<KeycloakAdminClient> {
    const baseUrl = process.env.KEYCLOAK_URL;
    const username = process.env.KEYCLOAK_ADMIN_USER;
    const password = process.env.KEYCLOAK_ADMIN_PASS;

    if (!baseUrl || !username || !password) {
      throw new InternalServerErrorException(
        'Variaveis de ambiente do Keycloak Admin nao configuradas',
      );
    }

    const kcAdminClient = new KeycloakAdminClient({
      baseUrl,
      realName: 'master',
    });

    try {
      await kcAdminClient.auth({
        username,
        password,
        grantType: 'password',
        clientId: 'admin-cli',
      });

      return kcAdminClient;
    } catch (error) {
      console.log('Erro ao autenticar no Keycloak Admin:', error);
      throw new InternalServerErrorException(
        'Falha na comunicação com o provedor',
      );
    }
  }
}
