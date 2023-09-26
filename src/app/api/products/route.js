import Product from "@/Model/product";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { title, description, price, image } = await req.json();
        if (!title && !description && !price && !image) NextResponse.error("Required paramters are missing!");
        await connectMongoDB();
        await Product.create({
            title, description, price, image
        });

        return NextResponse.json({
            message: "Product created successfully",
            success: true,
        }, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            message: "Failed Add Data",
            success: false,
        })
    }
}  