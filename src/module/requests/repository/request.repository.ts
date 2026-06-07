import { PrismaService } from 'prisma/prisma.service';
import { CreateRequestDto } from '../dto/request/create-request.dto';
import { UpdateRequestDto } from '../dto/request/update-request.dto';
import { RequestEntity } from '../entitities/request.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestStatusDTO } from '../dto/request-status/create-request-status.dto';
import { RequestStatusEntity } from '../entitities/request-status.entity';
import { UpdateStatusRequestDTO } from '../dto/request-status/update-request-status.dto';

@Injectable()
export class RequestRepository {
  constructor(private readonly prisma: PrismaService) {}


  // REQUEST METHODS
  
  async createRequest(data: CreateRequestDto): Promise<RequestEntity> {
    return await this.prisma.request.create({
      data,
    });
  }

  async findAllRequest(): Promise<RequestEntity[]> {
    return await this.prisma.request.findMany({
       include: {
        requester: {
          select: {
            firstName: true,
          }
        },
        status: {
          select: {
            name: true,
          }
        },
        requestField: {
          select: {
            name: true,
          }
        }
       }
    })
  }

  async findOneRequest(id: string): Promise<RequestEntity> {
    const user = await this.prisma.request.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Solicitacao nao encontrada');
    }

    return user;
  }

  async updateRequest(id: string, data: UpdateRequestDto) {
    const user = await this.prisma.request.update({
      where: { id },
      data,
    });

    if (!user) {
      throw new NotFoundException('Solicitacao nao encontrada');
    }

    return user;
  }

  async removeRequest(id: string) {
    const user = await this.prisma.request.delete({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Solicitacao nao encontrada');
    }

    return user;
  }


  // REQUEST STATUS METHODS
  
  async create_request_status(
    data: CreateRequestStatusDTO,
  ): Promise<RequestStatusEntity> {
    return await this.prisma.request_Status.create({
      data,
    });
  }

  async findAll_request_status(): Promise<RequestStatusEntity[]> {
    return await this.prisma.request_Status.findMany();
  }

  async findOne_request_status(id: string): Promise<RequestStatusEntity> {
    const request_status = await this.prisma.request_Status.findUnique({
      where: { id },
    });

    if (!request_status) {
      throw new NotFoundException('Status de Solicitacao nao cadastrada');
    }

    return request_status;
  }

  async update_request_status(
    id: string,
    data: UpdateStatusRequestDTO,
  ): Promise<RequestStatusEntity> {
    const request_status = await this.prisma.request_Status.update({
      where: { id },
      data,
    });

    if (!request_status) {
      throw new NotFoundException('Status de Solicitacao nao cadastrada');
    }

    return request_status;
  }

  async delete_request_status(id: string): Promise<RequestStatusEntity> {
   const request_status = await this.prisma.request_Status.delete({
      where: { id },

    });

    if (!request_status) {
      throw new NotFoundException('Status de Solicitacao nao cadastrada');
    }

    return request_status;
  }

  // REQUEST FIELD METHODS 

    async create_request_field(
    data: CreateRequestStatusDTO,
  ): Promise<RequestStatusEntity> {
    return await this.prisma.request_Field.create({
      data,
    });
  }

  async findAll_request_field(): Promise<RequestStatusEntity[]> {
    return await this.prisma.request_Field.findMany();
  }

  async findOne_request_field(id: string): Promise<RequestStatusEntity> {
    const request_status = await this.prisma.request_Field.findUnique({
      where: { id },
    });

    if (!request_status) {
      throw new NotFoundException('Status de Solicitacao nao cadastrada');
    }

    return request_status;
  }

  async update_request_field(
    id: string,
    data: UpdateStatusRequestDTO,
  ): Promise<RequestStatusEntity> {
    const request_status = await this.prisma.request_Field.update({
      where: { id },
      data,
    });

    if (!request_status) {
      throw new NotFoundException('Status de Solicitacao nao cadastrada');
    }

    return request_status;
  }

  async remove_request_field(id: string): Promise<RequestStatusEntity> {
   const request_status = await this.prisma.request_Field.delete({
      where: { id },

    });

    if (!request_status) {
      throw new NotFoundException('Status de Solicitacao nao cadastrada');
    }

    return request_status;
  }

}
