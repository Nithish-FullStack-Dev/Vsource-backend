import express from "express";
import {
  createAbout,
  deleteAbout,
  getAbout,
  getAboutCms,
  updateAbout,
} from "../controllers/AboutCmsController.js";

const router = express.Router();

router.post("/addAboutCms", createAbout);
router.get("/getAllAboutCms", getAbout);
router.get("/getAboutCms", getAboutCms);
router.put("/updateAboutCms/:id", updateAbout);
router.delete("/deleteAboutCms/:id", deleteAbout);

export default router;
