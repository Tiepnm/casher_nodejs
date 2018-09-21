import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "nestjs-config";
import {ConfigService} from "./config/config.service";
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";
import {ProductModule} from "./product/product.module";
import {TransactionModule} from "./transaction/transaction.module";

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/product'),
        ConfigModule.load(), ProductModule, TransactionModule],
    controllers: [AppController],
    providers: [AppService, {
        provide: ConfigService,
        useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
    }],
})
export class AppModule {
}
