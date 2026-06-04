import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { RequestRepository } from './repository/request.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService, RequestRepository, PrismaService],
 
})
export class RequestsModule {}
