import { Document } from 'mongoose';

export interface Product extends Document {
    readonly id: string;
    readonly name: string;
    readonly price: string;
    readonly quantity: number;
}