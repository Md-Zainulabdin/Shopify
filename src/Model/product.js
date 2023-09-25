import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        reqiured: true,
    },
    description: {
        type: String,
        reqiured: true,
    },
    price: {
        type: Number,
        reqiured: true,
    },
    image: {
        type: String,
        reqiured: true,
    },
}
    , {
        timestamps: true
    });

const Products = mongoose.model("Products", productSchema) || mongoose.model.Products;
export default Products;
