import { Module } from "@nestjs/common";
import { DatabaseProviderModule } from "./db/db.provider.module";
import { Demo2ControllerModule } from "./api/demo2.controller.module";
import { DemoControllerModule } from "./api/demo.controller.module";

@Module({
  imports: [DatabaseProviderModule, Demo2ControllerModule,DemoControllerModule],
})
export class AppModule {}
