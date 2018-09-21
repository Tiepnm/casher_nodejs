import {Body, Controller, Get, Post} from "@nestjs/common";
import {ProductService} from "./product.service";
import {ProductDTO} from "./dto/product.dto";
import {Product} from "./interface/product.interface";

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {

    }

    @Post()
    async create(@Body() productDTO: ProductDTO) {
        return this.productService.create(productDTO);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

}