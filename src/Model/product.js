import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
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
    image: [
        {
            imageUrl: String,
        }
    ],
}
    , {
        timestamps: true
    });

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
