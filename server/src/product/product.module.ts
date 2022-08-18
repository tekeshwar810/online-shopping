import { Module } from "@nestjs/common";
import { ProductModuleBase } from "./base/product.module.base";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { ProductResolver } from "./product.resolver";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from 'multer';

@Module({
  imports: [ProductModuleBase,MulterModule.register({
    storage:diskStorage({
      destination:'./assets/images',
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      },
    }),
    limits: {
      fileSize:1000000
    }
  })],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}
