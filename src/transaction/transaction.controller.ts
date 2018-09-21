import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {Transaction} from "./interface/transaction.interface";
import {TransactionService} from "./transaction.service";
import {TransactionDTO} from "./dto/transaction.dto";


@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {

    }
    @Get()
    async findAll(): Promise<Transaction[]> {
        return this.transactionService.findAll();
    }
    @Get(':tx_id')
    async findOne(@Param("tx_id") txId): Promise<Transaction[]> {
        return this.transactionService.findOne(txId);
    }
    @Post()
    async create(@Body() transaction: TransactionDTO) {
        return this.transactionService.create(transaction);
    }

    @Delete(':tx_id')
    async delete(@Param("tx_id") txId) {
        return this.transactionService.delete(txId);
    }

}