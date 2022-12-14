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
import { EditProductInput } from "./EditProductInput";
import { FilterProductInput } from "./FilterProductInput"
import { ProductWhereUniqueInput } from "./base/ProductWhereUniqueInput";
import { SearchProductInput } from "./SearchProductInput";
import { Public } from "src/decorators/public.decorator";


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
  @Public()
  @common.Get("/getAllProducts")
  // @nestAccessControl.UseRoles({
  //   resource: "Product",
  //   action: "read",
  //   possession: "own",
  // })
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async getAllProduct():Promise<Object>{
    const productList = await this.service.getProduct()
    return productList;
  }

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
  async addProduct(@Req() req:any,
    @common.Body() data: AddProductInput,
    @UploadedFiles() files:{image?: Express.Multer.File[]}
    ):Promise<Object>{
    if(req.fileValidationError){
      throw new BadRequestException('invaild file, only img file upload...')
    }else{
      const image:any = files.image
      const imgPath = image[0].path
      const productResponse =  await this.service.addProduct(data,imgPath)
     return productResponse;
    }
  }

  @common.Put("/editProduct/:id")
  @ApiConsumes('multipart/form-data')
  @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
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
  async editProduct(@Req() req:any,@common.Param() params: ProductWhereUniqueInput,@common.Body() data: EditProductInput,@UploadedFiles() files:{image?: Express.Multer.File[]}):Promise<Object>{
    const image:any = files.image
    const response = await this.service.updateProduct(data,image,params)
    return response
  }

  @Public()
  @common.Post("/filterProduct")
  // @nestAccessControl.UseRoles({
  //   resource: "Product",
  //   action: "read",
  //   possession: "own",
  // })
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async filterProduct(@common.Body() data: FilterProductInput):Promise<Object>{
    const productList =  await this.service.filterProducts(data)
    return productList;
  }

  @Public()
  @common.Post("/searchProduct")
  // @nestAccessControl.UseRoles({
  //   resource: "Product",
  //   action: "create",
  //   possession: "own",
  // })
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async searchProduct(@common.Body() data: SearchProductInput):Promise<any>{
    const product =  await this.service.searchProducts(data)
    return product
  }
}
