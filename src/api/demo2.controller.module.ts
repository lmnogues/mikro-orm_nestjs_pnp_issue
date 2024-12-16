import { Module } from "@nestjs/common";
import { Demo2Controller } from "./demo2.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Demo } from "src/db/entities/demo.entity";


@Module({
  imports: [
      MikroOrmModule.forFeature({
        entities: [Demo],
      }),],
  providers: [],
  controllers: [Demo2Controller],
})
export class Demo2ControllerModule {}
