import { Given, AfterAll, When, Then } from '@cucumber/cucumber';
import { Test } from '@nestjs/testing';
import { AppModule } from './../../../src/app.module';
import request from 'supertest';
import { CustomWorld } from '../support/custom-world';
import { Server } from 'http';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;

Given('the API is running', async function (this: CustomWorld) {
  if (!app) {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    this.app = app;
  }
});

When('I send a GET request to {string}', async function (this: CustomWorld, endpoint: string) {
  if (!this.app) throw new Error('App is not running');

  const server = this.app.getHttpServer() as Server;

  const response = await request(server).get(endpoint);

  this.response = response;
});

Then('the response status code should be {int}', function (this: CustomWorld, statusCode: number) {
  if (!this.response) throw new Error('Response is not defined');
  if (this.response.status !== statusCode) {
    throw new Error(`Expected status code ${statusCode}, but got ${this.response.status}`);
  }
});

Then(
  'the response body status should be {string}',
  function (this: CustomWorld, expectedStatus: string) {
    if (!this.response) throw new Error('Response is not defined');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const actualStatus = this.response.body!.status;

    if (actualStatus !== expectedStatus) {
      throw new Error(
        `Expected response body status "${expectedStatus}", but got "${actualStatus}"`,
      );
    }
  },
);

AfterAll(async () => {
  if (app) await app.close();
});
