import { registerAs } from '@nestjs/config';
export default registerAs('database', () => ({
  url: process.env['DATABASE_URL'],
  read_replicas_urls: process.env['DATABASE_REPLICAS_URL']?.split(',') || [],
  schema: process.env['DATABASE_SCHEMA'],
  logging: process.env['DATABASE_LOGGING'],
  poolsize: process.env['DATABASE_POOLSIZE'],
}));
