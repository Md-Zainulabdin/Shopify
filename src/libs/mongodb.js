import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDb Connect')
    } catch (error) {
        console.log("Failed to connect MongoDb");
    }
}