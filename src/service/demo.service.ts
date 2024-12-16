import { EntityManager, Transactional } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common'; 

@Injectable()
export class DemoService {
  constructor(private readonly em: EntityManager) {}


 
  async transactional() {
    this.em.transactional(async (em) => {
      const qb = em.createQueryBuilder("Demo");
      qb.select("*");
      const result = await qb.getResultList();
      console.log(result);
    });
  }
 
  async querybuilder() {
    const qb = this.em.createQueryBuilder("Demo");
    qb.select("*");
    const result = await qb.getResultList();
    console.log(result);
  }

   
  async execute() {
    const qb = await this.em.execute("SELECT * FROM test_mikro.demo");
    console.log(qb);
  }

}