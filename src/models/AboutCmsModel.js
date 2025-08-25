import mongoose from "mongoose";

const contentItemSchema = new mongoose.Schema({
  icon: { type: String, default: "" },
  text: { type: String, default: "" },
});

const statItemSchema = new mongoose.Schema({
  value: { type: Number, default: 0 },
  label: { type: String, default: "" },
  icon: { type: String, default: "" },
});

const aboutSectionSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    paragraph: { type: String, default: "" },
    para_one: { type: String, default: "" },
    para_two: { type: String, default: "" },
    contents: [contentItemSchema],
    mainImage: {
      url: { type: String, default: "" },
      quote: { type: String, default: "" },
    },
    stats: [statItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("AboutSectionCMS", aboutSectionSchema);
