-- DropIndex
DROP INDEX "Request_id_key";

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "client_request_id" TEXT;

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "sub" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "badges" TEXT[],

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_sub_key" ON "Client"("sub");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_client_request_id_fkey" FOREIGN KEY ("client_request_id") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
