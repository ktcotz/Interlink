import { readFileSync } from 'fs';
import { join } from 'path';

interface PackageJsonType {
  version: string;
}

const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../../../package.json'), { encoding: 'utf-8' }),
) as PackageJsonType;

export const swaggerConfig = {
  title: 'Interlink API',
  description: 'Comprehensive API documentation with example requests and responses. 🚀',
  version: packageJson.version || '1.0.0',
  path: 'api/api-docs',
  author: 'Kamil Naskręt',
  email: 'naskret.kamil@gmail.com',
  license: 'MIT',
};
