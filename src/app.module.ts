import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { TypedConfigService } from './config/typed-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
    }),
  ],
  controllers: [],
  providers: [TypedConfigService],
  exports: [TypedConfigService],
})
export class AppModule {}
