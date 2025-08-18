// routes/uploadRoutes.js
import express from "express";
import { upload } from "../middlewares/multer.js";
import { uploadOnCloudniary } from "../config/cloudinary.js";

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const uploadedUrl = await uploadOnCloudniary(req.file.path);

    if (!uploadedUrl) {
      return res.status(500).json({ error: "Cloudinary upload failed" });
    }

    res.json({ url: uploadedUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
