import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Company", "Influencer"]
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    url: [
        {
            platform: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true, collection: "User" });

export default mongoose.model("User", UserSchema);