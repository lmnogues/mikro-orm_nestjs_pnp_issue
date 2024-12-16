import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { mikroOrmConfBuilder } from '../mikro-orm.config'; 
import { DatabaseConfigModule } from '../config/configuration.module';
import { DatabaseConfigService } from '../config/configuration.service';
import { Migration20241122094628_initial } from './migrations/Migration20241216_initiale';

@Module({
  imports: [
    DatabaseConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      inject: [DatabaseConfigService],
      useFactory: (config: DatabaseConfigService) => {
        return mikroOrmConfBuilder({
          clientUrl: config.url,
          pool: {
            min: 0,
            max: Number(config.poolsize),
          },
          debug: config.logging,
          replicas: config.read_replicas_urls.map((replica_url) => ({
            clientUrl: replica_url,
          })),
          schema: config.schema,
          migrations: {
            tableName: 'mikro_orm_migrations',
            snapshot: false,
            migrationsList: [Migration20241122094628_initial],
          },
        });
      },
      providers: undefined,
    }),
  ],
})
export class DatabaseProviderModule {}
