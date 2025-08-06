import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  updateCourse,
} from "../controllers/CourseCmsController.js";

const router = express.Router();

router.post("/createCourse", createCourse);
router.get("/getCourse", getCourse);
router.put("/updateCourse", updateCourse);
router.delete("/deleteCourse", deleteCourse);

export default router;
