import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; 
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService<Record<string, string | number | boolean>, true>) {}

  get url(): string {
    return this.configService.get<string>('database.url');
  }

  get read_replicas_urls(): string[] {
    return this.configService.get<string[]>('database.read_replicas_urls');
  }

  get schema(): string {
    return this.configService.get<string>('database.schema');
  }

  get logging(): boolean {
    return this.configService.get<boolean>('database.logging');
  }

  get poolsize(): number {
    return Number(this.configService.get<number>('database.poolsize'));
  }
}
