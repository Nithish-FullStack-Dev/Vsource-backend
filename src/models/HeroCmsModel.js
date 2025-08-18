import mongoose, { model } from "mongoose";

const HeroSchema = new mongoose.Schema({
  backgroundImage: { type: String, default: "" },
  mainImagePng: { type: String, default: "" },
  title: { type: String, default: "" },
  badgeImage: { type: String, default: "" },
  aboutText: [[{ type: String, default: "" }]],
  countryImages: [{ type: String, default: "" }],
  studentsCount: { type: String, default: "" },
  universityPatner: { type: String, default: "" },
  ratings: { type: String, default: "" },
  //mobile view details
  mobileBgImage: { type: String, default: "" },
  applyHeading: { type: String, default: "" },
  applySubHeading: { type: String, default: "" },
});

export default mongoose.model("Hero", HeroSchema);
