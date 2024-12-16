import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property, 
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';
import { randomUUID, UUID } from 'crypto';

@Entity({ repository: () => EntityRepository<Demo> })
export class Demo {
  // for automatic inference via `em.getRepository(Etablissement)`
  [EntityRepositoryType]?: EntityRepository<Demo>;

  @Property()
  basicProperty!: string;

  @PrimaryKey({ type: 'uuid' })
  id: UUID = randomUUID();


}
