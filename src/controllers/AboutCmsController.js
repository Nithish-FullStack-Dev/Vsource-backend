import AboutCms from "../models/AboutCmsModel.js";

//! Create
export const createAbout = async (req, res) => {
  try {
    const about = new AboutCms(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating About section", error: err });
  }
};

//! Read (Get all)
export const getAbout = async (req, res) => {
  try {
    const about = await AboutCms.find().lean();
    res.status(200).json(about);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching About section", error: err });
  }
};

//! Get the single AboutCMS record
export const getAboutCms = async (req, res) => {
  try {
    const about = await AboutCms.findOne();
    if (!about)
      return res.status(404).json({ message: "About data not found" });
    res.status(200).json(about);
  } catch (err) {
    res.status(500).json({ message: "Error fetching About data", error: err });
  }
};

//! Update
export const updateAbout = async (req, res) => {
  try {
    const updated = await AboutCms.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating About section", error: err });
  }
};

//! Delete
export const deleteAbout = async (req, res) => {
  try {
    await AboutCms.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "About section deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting About section", error: err });
  }
};
