import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';

export class CustomWorld extends World {
  app?: INestApplication;
  response?: request.Response;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
