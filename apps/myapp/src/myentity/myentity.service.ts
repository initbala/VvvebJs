import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyentityServiceBase } from "./base/myentity.service.base";

@Injectable()
export class MyentityService extends MyentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
