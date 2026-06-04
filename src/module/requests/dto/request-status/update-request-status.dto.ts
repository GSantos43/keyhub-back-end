import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestStatusDTO } from './create-request-status.dto';

export class UpdateStatusRequestDTO extends PartialType(
  CreateRequestStatusDTO,
) {}
