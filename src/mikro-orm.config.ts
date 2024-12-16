import { Migrator } from '@mikro-orm/migrations';
import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Demo } from './db/entities/demo.entity';

/** Common MikroOrm options. */
const DEFAULT_OPTIONS: Options = {
  extensions: [Migrator],
  // forceUndefined changes not supported by other modules
  // forceUndefined: true,
   entities :[Demo],
  driver: PostgreSqlDriver,
  metadataProvider: TsMorphMetadataProvider,
  metadataCache: {
    options: { cacheDir: './dist/cache' },
  },
  
  debug: false,
};

/** MikroOrm options factory: merge provided options with default conf. */
export function mikroOrmConfBuilder(opts: Options = {}): Options {
  return { ...DEFAULT_OPTIONS, ...opts };
}

/** Export MikroOrm CLI configuration. */
export default mikroOrmConfBuilder({
  dbName: 'postgres',
  connect: false, // CLI does not connect to DB
});
