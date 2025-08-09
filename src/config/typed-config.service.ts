import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvTyped } from './config.schema';

@Injectable()
export class TypedConfigService {
  constructor(private configService: ConfigService) {}

  get<K extends keyof EnvTyped>(key: K): EnvTyped[K] {
    return this.configService.get<EnvTyped[K]>(key)!;
  }
}
