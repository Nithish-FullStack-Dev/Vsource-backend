import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  studentsNo: {
    value: { type: Number, default: 0 },
    label: { type: String, default: "" },
    icon: { type: String, default: "" },
  },
  experience: {
    value: { type: Number, default: 0 },
    label: { type: String, default: "" },
    icon: { type: String, default: "" },
  },
  destinations: {
    value: { type: Number, default: 0 },
    label: { type: String, default: "" },
    icon: { type: String, default: "" },
  },
});

const AboutSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    paragraph1: { type: String, default: "" },
    paragraph2: { type: String, default: "" },
    stats: {
      type: statSchema,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AboutCms", AboutSchema);
