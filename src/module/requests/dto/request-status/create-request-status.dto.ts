import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateRequestStatusDTO {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsInt()
  weight!: number;
}
