import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    thumbnail: { type: String, default: "" },
    video: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
