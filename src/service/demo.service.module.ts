import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Demo } from "src/db/entities/demo.entity";
import { DemoService } from "./demo.service";

@Module({
  imports: [    
    MikroOrmModule.forFeature({
      entities: [Demo],
    }),
  ],
  providers: [DemoService],
  exports: [DemoService],
})
export class DemoServiceModule {}
