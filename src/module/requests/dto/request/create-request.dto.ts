import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRequestDto {

  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  field!: string;

  @IsNotEmpty()
  @IsString()
  status_id!: string;

  @IsNotEmpty()
  @IsString()
  requester_user_id!: string;

  @IsOptional()
  @IsString()
  request_FieldId!: string | null;
}
