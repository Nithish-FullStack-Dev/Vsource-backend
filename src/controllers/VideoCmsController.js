import Video from "../models/VideoCmsModel.js";

// Create or replace the single video document
export const createOrUpdateVideo = async (req, res) => {
  try {
    const existing = await Video.findOne();
    if (existing) {
      const updated = await Video.findByIdAndUpdate(existing._id, req.body, {
        new: true,
      });
      return res.status(200).json(updated);
    } else {
      const newVideo = new Video(req.body);
      await newVideo.save();
      return res.status(201).json(newVideo);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving video", error: error.message });
  }
};

// Get the single video document
export const getVideo = async (req, res) => {
  try {
    const video = await Video.findOne();
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching video", error: error.message });
  }
};

// Delete the single video document
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findOne();
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    await Video.findByIdAndDelete(video._id);
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting video", error: error.message });
  }
};
