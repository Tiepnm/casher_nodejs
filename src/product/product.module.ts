import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ProductSchema} from "../entity/product.schema";
import {ProductController} from "./product.controller";
import {ProductService} from "./product.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'ProductModel', schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}