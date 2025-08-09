import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypedConfigService } from './config/typed-config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(TypedConfigService);
  const port = configService.get('PORT') ?? 3000;

  await app.listen(port);

  console.log(`🪄  Server started on port ${port} `);
}

bootstrap().catch((err) => {
  console.log(`❌ Server crashed ${err}`);
  process.exit(1);
});
