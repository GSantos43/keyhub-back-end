import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repository/client.repository';

@Injectable()
export class ClientsService {
  constructor(private readonly repository: ClientRepository) {}

  create(data: CreateClientDto) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, data: UpdateClientDto) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
