import { Controller, Get } from "@nestjs/common"; 
import { EntityManager } from "@mikro-orm/postgresql";
import { DemoService } from "../service/demo.service";

@Controller("demo2")
export class Demo2Controller {
  constructor(private readonly em: EntityManager) {} 

  @Get("transactional")
  async transactional() {
    this.em.transactional(async (em) => {
      const qb = em.createQueryBuilder("Demo");
      qb.select("*");
      const result = await qb.getResultList();
      console.log(result);
    });
  }

  @Get("querybuilder")
  async querybuilder() {
    const qb = this.em.createQueryBuilder("Demo");
    qb.select("*");
    const result = await qb.getResultList();
    console.log(result);
  }
  
  @Get("execute")
  async execute() {
    const qb = await this.em.execute("SELECT * FROM test_mikro.demo");
    console.log(qb);
  } 
}
