import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientRepository } from './repository/client.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientRepository, PrismaService],
})
export class ClientsModule {}
