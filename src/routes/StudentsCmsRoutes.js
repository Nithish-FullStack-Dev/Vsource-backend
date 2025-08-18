import express from "express";
import {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  createOrUpdateStudentsCms,
} from "../controllers/StudentsCmsController.js";

const router = express.Router();

router.post("/createStudent", createOrUpdateStudentsCms);
router.get("/getAllStudent", getAllStudents);
router.get("/getStudent/:id", getStudentById);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);

export default router;
