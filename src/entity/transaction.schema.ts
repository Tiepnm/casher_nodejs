import * as mongoose from 'mongoose';
import {Product} from "../product/interface/product.interface";
import {ProductSchema} from "./product.schema";

export const TransactionSchema = new mongoose.Schema({
    id: String,
    name: String,
    amount: Number,
    create_date: Date,
    update_date: Date,
    product: [ProductSchema],

});