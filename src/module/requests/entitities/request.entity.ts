import { Request } from "@prisma/client";

export class RequestEntity implements Request {
  
 
  id!: string;
  name!: string;
  field!: string;
  client_request_id!: string | null;
  status_id!: string;
  createdAt!: Date;
  requester_user_id!: string;
  request_FieldId!: string | null;
}
