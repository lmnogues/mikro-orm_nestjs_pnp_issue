import { Controller, Get } from "@nestjs/common"; 
import { EntityManager } from "@mikro-orm/postgresql";
import { DemoService } from "../service/demo.service";

@Controller("demo")
export class DemoController { 
  constructor(private readonly service: DemoService) {}

  @Get("transactional")
  async transactional() {
   return this.service.transactional();
  }

  @Get("querybuilder")
  async querybuilder() {
    return this.service.querybuilder();
  }

  
  @Get("execute")
  async execute() {
    return this.service.execute();
  }
}
