import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema({
  country: { type: String, default: "" },
  tag: { type: String, default: "" },
  description: [{ type: String, default: "" }],
  image: { type: String, default: "" },
  url: { type: String, default: "" },
});

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    courses: [CoursesSchema],
  },
  { timestamps: true }
);

export default mongoose.model("CourseCms", CourseSchema);
