import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // set views folder & engine
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  // serve static files (CSS, JS)
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
  console.log('👉 App running at http://localhost:3000');
}
bootstrap();
