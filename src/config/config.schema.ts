import z from 'zod';

export const envSchema = z.object({
  PORT: z.string().regex(/^\d+$/, 'PORT must be a number').transform(Number).default(3000),
  DATABASE_URL: z.url(),
  JWT_ACCESS_TOKEN_SECRET: z.string().min(10),
  JWT_REFRESH_TOKEN_SECRET: z.string().min(10),
});

export type EnvTyped = z.infer<typeof envSchema>;
