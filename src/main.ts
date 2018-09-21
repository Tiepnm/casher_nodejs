import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LoggingInterceptor} from "nestjs-utility";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor());
  const mongoose = require('mongoose');
  mongoose.set('debug', true);
  app.enableCors();
  await app.listen(3002);
}
bootstrap();
