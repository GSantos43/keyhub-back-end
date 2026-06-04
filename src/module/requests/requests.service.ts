import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/request/create-request.dto';
import { UpdateRequestDto } from './dto/request/update-request.dto';
import { RequestRepository } from './repository/request.repository';
import { CreateRequestStatusDTO } from './dto/request-status/create-request-status.dto';


@Injectable()
export class RequestsService {
  constructor(private readonly repository: RequestRepository) {}

  createRequest(data: CreateRequestDto) {
    return this.repository.createRequest(data);
  }

  findAllRequest() {
    return this.repository.findAllRequest();
  }

  findOneRequest(id: string) {
    return this.repository.findOneRequest(id);
  }

  updateRequest(id: string, data: UpdateRequestDto) {
    return this.repository.updateRequest(id, data);
  }
  removeRequest(id: string) {
    return this.repository.removeRequest(id);
  }

  // REQUEST FIELD METHODS

  createRequest_field(data: CreateRequestStatusDTO) {
    return this.repository.create_request_field(data);
  }

  findAllRequest_field() {
    return this.repository.findAll_request_field();
  }

  findOneRequest_field(id: string) {
    return this.repository.findOne_request_field(id);
  }

  updateRequest_field(id: string, data: UpdateRequestDto) {
    return this.repository.update_request_field(id, data);
  }
  removeRequest_field(id: string) {
    return this.repository.remove_request_field(id);
  }

  // REQUEST STATUS METHODS

  createRequest_status(data: CreateRequestStatusDTO) {
    return this.repository.create_request_status(data);
  }

  findAllRequest_status() {
    return this.repository.findAll_request_status();
  }

  findOneRequest_status(id: string) {
    return this.repository.findOne_request_status(id);
  }

  updateRequest_status(id: string, data: UpdateRequestDto) {
    return this.repository.update_request_status(id, data);
  }
  removeRequest_status(id: string) {
    return this.repository.delete_request_status(id);
  }
}
