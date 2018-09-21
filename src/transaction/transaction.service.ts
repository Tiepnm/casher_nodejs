import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Transaction} from "./interface/transaction.interface";
import {TransactionDTO} from "./dto/transaction.dto";
import {ProductService} from "../product/product.service";
import {ProductModule} from "../product/product.module";
import {Product} from "../product/interface/product.interface";
import {ProductDTO} from "../product/dto/product.dto";

@Injectable()
export class TransactionService {
    constructor(@InjectModel('TransactionModel') private readonly transactionModel: Model<Transaction>,
                @InjectModel('ProductModel') private readonly productModel: Model<Product>, private readonly productService: ProductService) {
    }

    async findAll(): Promise<Transaction[]> {
        return await this.transactionModel.find().sort({create_date: 'descending'}).exec();
    }

    async create(transactionDTO: TransactionDTO): Promise<Transaction> {
        console.log(transactionDTO)
        transactionDTO.create_date = new Date();
        transactionDTO.update_date = new Date();

        let productItem: any = [];
        let amount: number = 0;
        try {
            for (const product of transactionDTO.product) {

                let productDB: Product = await this.productModel.findOne({_id: product.id});
                if (productDB != null) {
                    productItem.push(product);
                    amount += parseFloat(product.price);
                }
            }
        }
        catch (e) {
            console.log(e);
        }

        if (productItem != null && productItem.length > 0) {
            const transaction = new this.transactionModel({
                name: transactionDTO.name,
                create_date: transactionDTO.create_date,
                update_date: transactionDTO.update_date,
                product: productItem,
                amount: amount,

            });

            return await transaction.save();
        }
        else {
            return null;
        }

    }
    async findOne(txId: string) {
        return this.transactionModel.findOne({_id: txId});
    }
    async delete(txId: string) {
        return this.transactionModel.findByIdAndRemove({_id: txId});
    }
}