import { Module } from "@nestjs/common";
import { DemoController } from "./demo.controller"; 
import { DemoServiceModule } from "@/service/demo.service.module";

@Module({
  imports: [DemoServiceModule],
  providers: [],
  controllers: [DemoController],
})
export class DemoControllerModule {}
