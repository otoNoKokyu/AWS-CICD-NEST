import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('should return server-side rendered times with timezones', () => {
    const result = appController.root();

    expect(result).toHaveProperty('serverTimeIndia');
    expect(result).toHaveProperty('serverTimeUS');
    expect(result).toHaveProperty('tzIndia', 'Asia/Kolkata');
    expect(result).toHaveProperty('tzUS', 'America/New_York');

    // make sure values are strings
    expect(typeof result.serverTimeIndia).toBe('string');
    expect(typeof result.serverTimeUS).toBe('string');
  });
});
