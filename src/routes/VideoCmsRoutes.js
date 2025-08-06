import express from "express";
import {
  createOrUpdateVideo,
  getVideo,
  deleteVideo,
} from "../controllers/VideoCmsController.js";

const router = express.Router();

router.get("/getVideo", getVideo);
router.post("/createOrUpdateVideo", createOrUpdateVideo);
router.delete("/deleteVideo", deleteVideo);

export default router;
