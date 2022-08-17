import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { Salt, parseSalt } from "src/auth/password.service";
import { hash } from "bcrypt";
import * as dotenv from "dotenv";

// @ts-ignore
// eslint-disable-next-line
import { AppModule } from "./app.module";
import {
  swaggerPath,
  swaggerDocumentOptions,
  swaggerSetupOptions,
  // @ts-ignore
  // eslint-disable-next-line
} from "./swagger";

const { PORT = 3000 } = process.env;

async function globalMiddleware(req:Request,res:Response,next:NextFunction){
  next()
}

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  app.use(globalMiddleware)  
  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  /** check if there is Public decorator for each path (action) and its method (findMany / findOne) on each controller */
  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes("isPublic")
      ) {
        method.security = [];
      }
    });
  });

  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  void app.listen(PORT);

  return app;
}

module.exports = main();
