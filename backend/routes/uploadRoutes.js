import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import process from 'process'


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Check if Cloudinary is configured
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      console.warn("Cloudinary environment variables missing. Falling back to base64 data URI.");
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      return res.json({ url: base64Image });
    }

    // Upload to Cloudinary using stream
    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "influbid_campaigns" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });
    };

    const result = await uploadStream();
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    res.status(500).json({ message: error.message || "Upload failed" });
  }
});

export default router;
