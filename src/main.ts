import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); //cast the app to NestExpressApplication to access express specific methods
  app.disable('x-powered-by'); //disables the header
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
      // Log validation errors for debugging
      console.log('Validation Error Details:', {
        timestamp: new Date().toISOString(),
        errors: errors.map(error => ({
          field: error.property,
          value: error.value,
          constraints: error.constraints,
          messages: Object.values(error.constraints || {})
        }))
      });
      
      // Create custom error response
      const customErrors = errors.map(error => ({
        field: error.property,
        message: Object.values(error.constraints || {}).join(', '),
        value: error.value
      }));
      
      return new BadRequestException({
        success: false,
        message: 'Validation failed',
        errors: customErrors,
        timestamp: new Date().toISOString()
      });
    }
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
