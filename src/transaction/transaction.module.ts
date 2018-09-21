import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {TransactionSchema} from "../entity/transaction.schema";
import {TransactionController} from "./transaction.controller";
import {TransactionService} from "./transaction.service";

import {ProductService} from "../product/product.service";
import {ProductSchema} from "../entity/product.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'TransactionModel', schema: TransactionSchema}, { name: 'ProductModel', schema: ProductSchema }])],
    controllers: [TransactionController],
    providers: [TransactionService, ProductService],
})
export class TransactionModule {
}