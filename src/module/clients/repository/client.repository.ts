import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { ClientEntity } from '../entities/client.entity';

@Injectable()
export class ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateClientDto): Promise<ClientEntity> {
    return await this.prisma.client.create({
      data,
    });
  }

  async findAll(): Promise<ClientEntity[]> {
    return await this.prisma.client.findMany()
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({
        where: { id },
    })

    if(!client){
        throw new NotFoundException("Client nao encontrado")
    }

    return client
  }

  async update(id: string, data: UpdateClientDto) {
     const client = await this.prisma.client.update({
        where: { id },
        data
    })

    if(!client){
        throw new NotFoundException("Client nao encontrado")
    }

    return client
  }

  async remove(id: string) {
    const client = await this.prisma.client.delete({
        where: { id },
    })

    if(!client){
        throw new NotFoundException("Client nao encontrado")
    }

    return client
  }
}
