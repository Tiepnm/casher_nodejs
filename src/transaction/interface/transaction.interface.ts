import {Document} from 'mongoose';
import {Product} from "../../product/interface/product.interface";

export interface Transaction extends Document {
    readonly id: string;
    readonly amount: number;
    readonly name: string;
    readonly product: Product[];
}