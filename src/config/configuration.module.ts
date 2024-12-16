import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

import configuration from './configuration';
import { DatabaseConfigService } from './configuration.service';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string(),
        DATABASE_REPLICAS_URL: Joi.string().optional(),
        WAGYZ_BRIDGE_DATABASE_SCHEMA: Joi.string().default('bridge'),
        WAGYZ_BRIDGE_DATABASE_LOGGING: Joi.string().default('false'),
        WAGYZ_BRIDGE_DATABASE_POOLSIZE: Joi.number().default(10),
      }),
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
