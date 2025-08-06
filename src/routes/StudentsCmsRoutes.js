import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/StudentsCmsController.js";

const router = express.Router();

router.post("/createStudent", createStudent);
router.get("/getAllStudent", getAllStudents);
router.get("/getStudent/:id", getStudentById);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);

export default router;
