import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';

import {Product} from "./interface/product.interface";
import {ProductDTO} from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectModel('ProductModel') private readonly productModel: Model<Product>) {
    }

    async findAll(): Promise<Product[]> {

        // let product: Product[] = [];
        // product =  await this.productModel.findOne({_id : "5b7d02b90866ce409870ae78"});
        // console.log(product)
        return await this.productModel.find().exec();
    }

    async create(productDTO: ProductDTO): Promise<Product> {
        const product = new this.productModel(productDTO);

        return await product.save();
    }
}