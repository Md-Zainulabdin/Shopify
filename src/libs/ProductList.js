import Product from "@/Model/product";
import connectMongoDB from "./mongodb"

export const ProductList = async () => {
    try {
        await connectMongoDB();
        const data = await Product.find({});
        if (!data) return;
        return data;
    } catch (error) {
        return {
            message: "Failed to get data"
        }
    }
}