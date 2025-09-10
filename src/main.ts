import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as ejs from 'ejs';  // 👈 import ejs

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // tell Nest/Express to use ejs for .ejs files
  app.engine('ejs', ejs.__express);  // 👈 add this line
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
  console.log('👉 App running at http://localhost:3000');
}
bootstrap();
