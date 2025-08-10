import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypedConfigService } from './config/typed-config.service';
import { AllExceptionsFilter } from './common/all-exception.filter';
import { LoggerService } from './logger/logger.service';
import { SwaggerModuleSetup } from './swagger/swagger.module';
import helmet from 'helmet';

async function bootstrap(): Promise<void> {
  const logger = new LoggerService();

  const app = await NestFactory.create(AppModule, {
    logger,
  });

  const configService = app.get(TypedConfigService);
  const port = configService.get('PORT') ?? 3000;

  app.useGlobalFilters(new AllExceptionsFilter(logger));
  app.use(helmet());

  SwaggerModuleSetup.setup(app);

  await app.listen(port);

  console.log(`🪄  Server started on port ${port}`);
}

bootstrap().catch((err) => {
  console.log(`❌ Server crashed ${err}`);
  process.exit(1);
});
