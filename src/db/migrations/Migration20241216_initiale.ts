import { Migration } from "@mikro-orm/migrations";
import { Knex } from "@mikro-orm/postgresql";

const TABLE_NAME = 'demo';

export class Migration20241122094628_initial extends Migration {
  
  override getKnex(): Knex {
    return this.ctx ?? this.driver.getConnection('write').getKnex();
  }

  override async up(): Promise<void> {
    const schema = this.driver.config.get('schema') || '';
    const knex = this.getKnex();

    await knex.schema.withSchema(schema).createSchemaIfNotExists(schema);

    await knex.schema.withSchema(schema).createTable(TABLE_NAME, (table) => {
      table.uuid('id').primary().notNullable();
      table.string('basicProperty').nullable();
    });
  }
}
