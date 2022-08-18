import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductService } from "./product.service";
import { ProductControllerBase } from "./base/product.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";

import { BadRequestException, Body, Req, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RoleGuard } from "src/role.guard";
import { Product } from "./base/Product";
import * as errors from "../errors";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { imageFileFilter } from "src/util/FileValidator";
import { Express,Request } from 'express'
import { AddProductInput } from "./AddProductInput";


@swagger.ApiTags("products")
@common.Controller("products")
export class ProductController extends ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  // @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post("/addProduct")
  @ApiConsumes('multipart/form-data')
  @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "own",
  })
  @UseInterceptors(FileFieldsInterceptor([
    {name:'image', maxCount: 1},
  ],
  {fileFilter:imageFileFilter}  
  ))
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async addProduct(@Req() req:any,@common.Body() data: AddProductInput,@UploadedFiles() files:{image?: Express.Multer.File[]}):Promise<Object>{
    console.log('file',files.image,'data',data);
    if(req.fileValidationError){
      throw new BadRequestException('invaild file, only img file upload...')
    }else{
      const image:any = files.image
      const imgPath = image[0].path
    
     const productResponse =  await this.service.addProduct(data,imgPath)
     return productResponse;
    }
  }
}
