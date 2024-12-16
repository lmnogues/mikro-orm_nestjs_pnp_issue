Error.stackTraceLimit = 1000; // Increase depth in Stacktraces

import { MikroORM } from '@mikro-orm/core';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

 

 
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true });

  // Get MikroORM instance and run migrations
  const orm = app.get(MikroORM);
  const migrator = orm.getMigrator();
  await migrator.up(); // Runs pending migrations

  await app.listen(6543);
}

bootstrap().catch((e) => {
  console.error(`Une erreur a eu lieu au démarrage du serveur ${e}`);
});
