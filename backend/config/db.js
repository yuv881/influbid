import mongoose from "mongoose";
import process from "process";

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("❌ MongoDB connection failed")
        console.log(error)
        process.exit(1)
    }
}

export default ConnectDB;