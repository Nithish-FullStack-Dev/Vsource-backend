import express from "express";
import {
  createOrUpdateAbout,
  deleteAbout,
  getAbout,
  getAboutCms,
  updateAbout,
} from "../controllers/AboutCmsController.js";

const router = express.Router();

router.post("/addAboutCms", createOrUpdateAbout);
router.get("/getAllAboutCms", getAbout);
router.get("/getAboutCms", getAboutCms);
router.put("/updateAboutCms/:id", updateAbout);
router.delete("/deleteAboutCms/:id", deleteAbout);

export default router;
