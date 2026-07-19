import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    brandInitials: {
        type: String,
        required: true
    },
    brandColor: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    niche: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    minBudget: {
        type: Number,
        required: true
    },
    maxBudget: {
        type: Number,
        required: true
    },
    budgetRange: {
        type: String,
        required: true
    },
    daysLeft: {
        type: String,
        required: true
    },
    platforms: [{
        type: String,
        required: true
    }],
    status: {
        type: String,
        enum: ["OPEN", "CLOSED"],
        default: "OPEN"
    },
    image: {
        type: String,
        default: ""
    },
    bidsCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true, collection: "Campaign" });

export default mongoose.model("Campaign", CampaignSchema);
