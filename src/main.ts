import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    console.log(`🪄  Server started on port 3000`);
  })
  .catch((err) => {
    console.log(`❌ Server crashed ${err}`);
    process.exit(1);
  });
