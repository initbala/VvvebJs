import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MyentityService } from "./myentity.service";
import { MyentityControllerBase } from "./base/myentity.controller.base";

@swagger.ApiTags("myentities")
@common.Controller("myentities")
export class MyentityController extends MyentityControllerBase {
  constructor(protected readonly service: MyentityService) {
    super(service);
  }
}
