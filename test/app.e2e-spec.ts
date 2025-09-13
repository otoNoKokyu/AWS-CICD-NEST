import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { join } from 'path';

let app: NestExpressApplication;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication<NestExpressApplication>();
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe('AppController (e2e)', () => {
  it('/ (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/');
    
    expect(res.status).toBe(200);
    expect(res.type).toBe('text/html');
    
    // Check for basic content
    expect(res.text).toContain('New York');
    expect(res.text).toContain('Kolkata');
  });

  it('/api/sse-time (GET) - SSE endpoint should be accessible', (done) => {
    const req = request(app.getHttpServer())
      .get('/api/sse-time')
      .set('Accept', 'text/event-stream')
      .expect(200)
      .expect('Content-Type', /text\/event-stream/);

    // End the request quickly since SSE is a persistent stream
    setTimeout(() => {
      req.abort();
      done();
    }, 100);
  });
});