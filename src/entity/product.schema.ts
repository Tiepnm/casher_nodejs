import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    quantity: Number,
});