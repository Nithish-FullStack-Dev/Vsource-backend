import StudentsCmsModel from "../models/StudentsCmsModel.js";

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const student = new StudentsCmsModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating student", error: error.message });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentsCmsModel.find();
    res.status(200).json(students);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching students", error: error.message });
  }
};

// Get a single student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await StudentsCmsModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching student", error: error.message });
  }
};

// Update a student by ID
export const updateStudent = async (req, res) => {
  try {
    const updated = await StudentsCmsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating student", error: error.message });
  }
};

// Delete a student by ID
export const deleteStudent = async (req, res) => {
  try {
    const deleted = await StudentsCmsModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting student", error: error.message });
  }
};
