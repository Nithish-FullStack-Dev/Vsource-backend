import express from "express";
import {
  createHero,
  getHero,
  updateHero,
  deleteHero,
} from "../controllers/HeroCmsController.js";

const router = express.Router();

router.post("/createHero", createHero);
router.get("/getHero", getHero);
router.put("/updateHero", updateHero);
router.delete("/deleteHero", deleteHero);

export default router;
