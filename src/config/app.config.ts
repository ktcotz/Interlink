import { registerAs } from '@nestjs/config';
import { validateEnv } from './config.helper';
import { EnvTyped } from './config.schema';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default registerAs('app', (): EnvTyped => {
  const parsedEnv = validateEnv(process.env);

  return {
    PORT: parsedEnv.PORT,
    DATABASE_URL: parsedEnv.DATABASE_URL,
    JWT_ACCESS_TOKEN_SECRET: parsedEnv.JWT_ACCESS_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_SECRET: parsedEnv.JWT_REFRESH_TOKEN_SECRET,
  };
});
