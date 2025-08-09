import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { TypedConfigService } from './config/typed-config.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
    }),
    HealthModule,
  ],
  controllers: [],
  providers: [TypedConfigService],
  exports: [TypedConfigService],
})
export class AppModule {}
