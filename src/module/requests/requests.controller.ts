import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/request/create-request.dto';
import { UpdateRequestDto } from './dto/request/update-request.dto';
import { CreateRequestStatusDTO } from './dto/request-status/create-request-status.dto';
import { UpdateStatusRequestDTO } from './dto/request-status/update-request-status.dto';

@Controller('v1/request')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.createRequest(createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestsService.findAllRequest();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOneRequest(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestsService.updateRequest(id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.removeRequest(id);
  }

  // REQUEST STATUS ROUTES

  @Post('/status')
  create_request_status(@Body() createRequestStatusDto: CreateRequestStatusDTO) {
    return this.requestsService.createRequest_status(createRequestStatusDto);
  }

  @Get('/status/all')
  findAll_request_status() {
    return this.requestsService.findAllRequest_status();
  }

  @Get('status/:id')
  findOne_request_status(@Param('id') id: string) {
    return this.requestsService.findOneRequest_status(id);
  }

  @Patch('status/:id')
  update_request_status(@Param('id') id: string, @Body() updateRequestDto: UpdateStatusRequestDTO) {
    return this.requestsService.updateRequest_status(id, updateRequestDto);
  }

  @Delete('status/:id')
  remove_request_status(@Param('id') id: string) {
    return this.requestsService.removeRequest_status(id);
  }

  // REQUEST FIELD ROUTES

  @Post('/field')
  create_request_field(@Body() createRequestStatusDto: CreateRequestStatusDTO) {
    return this.requestsService.createRequest_field(createRequestStatusDto);
  }

  @Get('/field/all')
  findAll_request_field() {
    return this.requestsService.findAllRequest_field();
  }

  @Get('field/:id')
  findOne_request_field(@Param('id') id: string) {
    return this.requestsService.findOneRequest_field(id);
  }

  @Patch('field/:id')
  update_request_field(@Param('id') id: string, @Body() updateRequestDto: UpdateStatusRequestDTO) {
    return this.requestsService.updateRequest_field(id, updateRequestDto);
  }

  @Delete('field/:id')
  remove_request_field(@Param('id') id: string) {
    return this.requestsService.removeRequest_field(id);
  }
}
