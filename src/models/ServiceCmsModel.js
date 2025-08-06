import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    logoUrl: { type: String, required: true },
    externalUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
