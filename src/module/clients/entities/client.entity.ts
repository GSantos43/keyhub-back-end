import { Client } from "@prisma/client";

export class ClientEntity implements Client {
    name!: string;
    id!: string;
    sub!: string;
    badges!: string[];
}
