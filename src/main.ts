import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  const config = new DocumentBuilder()
    .setTitle('Omni Health API')
    .setDescription('API documentation for Omni Health application')
    .setVersion('1.0')
    .addTag('cat')
    .build();
  
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app,config))
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
