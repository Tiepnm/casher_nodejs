import {Product} from "../../product/interface/product.interface";
import {ProductDTO} from "../../product/dto/product.dto";
export class TransactionDTO {
    readonly id: string;
    readonly name: string;
    private _create_date: Date;
    private _update_date: Date;
    readonly product: ProductDTO[];


    get create_date(): Date {
        return this._create_date;
    }

    set create_date(value: Date) {
        this._create_date = value;
    }

    get update_date(): Date {
        return this._update_date;
    }

    set update_date(value: Date) {
        this._update_date = value;
    }
}