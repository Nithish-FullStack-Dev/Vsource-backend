import mongoose from "mongoose";

const Students = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    videoUrl: { type: String, default: "" },
    thumbnail: { type: String, default: "" },
  },
  { timestamps: true }
);

const StudentsSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  students: [Students],
});

export default mongoose.model("StudentsCms", StudentsSchema);
