import express from "express";
import Campaign from "../models/postCampaign.js";

const router = express.Router();

// @desc    Get all campaigns
// @route   GET /api/campaigns
// @access  Public
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find({}).populate("companyId", "name userName email");
    res.json(campaigns);
  } catch (error) {
    console.error("Get Campaigns Error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
});

// @desc    Create a new campaign
// @route   POST /api/campaigns
// @access  Public
router.post("/", async (req, res) => {
  try {
    const {
      companyId,
      brandName,
      brandInitials,
      brandColor,
      name,
      niche,
      description,
      minBudget,
      maxBudget,
      daysLeft,
      platforms,
      image
    } = req.body;

    if (!companyId || !brandName || !name || !description || !minBudget || !maxBudget || !daysLeft) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const budgetRange = `$${Number(minBudget).toLocaleString()} - $${Number(maxBudget).toLocaleString()}`;

    const campaign = await Campaign.create({
      companyId,
      brandName,
      brandInitials: brandInitials || brandName.slice(0, 2).toUpperCase(),
      brandColor: brandColor || "bg-brand-orange text-white",
      name,
      niche,
      description,
      minBudget,
      maxBudget,
      budgetRange,
      daysLeft: daysLeft.includes("d") ? daysLeft : `${daysLeft}d`,
      platforms: platforms || ["Instagram"],
      image: image || "",
      status: "OPEN",
      bidsCount: 0
    });

    res.status(201).json(campaign);
  } catch (error) {
    console.error("Create Campaign Error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
});

export default router;
