import { Module } from "@nestjs/common";
import { MyentityModuleBase } from "./base/myentity.module.base";
import { MyentityService } from "./myentity.service";
import { MyentityController } from "./myentity.controller";

@Module({
  imports: [MyentityModuleBase],
  controllers: [MyentityController],
  providers: [MyentityService],
  exports: [MyentityService],
})
export class MyentityModule {}
