import { NestFactory } from '@nestjs/core';
import { mongoose } from '@typegoose/typegoose';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
  mongoose.set('debug', true);
}
bootstrap();
