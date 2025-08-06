import Service from "../models/ServiceCmsModel.js";

//! Create
export const createService = async (req, res) => {
  try {
    const newBadge = new Service(req.body);
    const savedBadge = await newBadge.save();
    res.status(201).json(savedBadge);
  } catch (err) {
    res.status(500).json({ error: "Failed to create badge", details: err });
  }
};

//! Read All
export const getAllService = async (req, res) => {
  try {
    const badges = await Service.find();
    res.status(200).json(badges);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch badges", details: err });
  }
};

//! Read One
export const getServiceById = async (req, res) => {
  try {
    const badge = await Service.findById(req.params.id);
    if (!badge) return res.status(404).json({ error: "Service not found" });
    res.status(200).json(badge);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch badge", details: err });
  }
};

//! Update
export const updateService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Service not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update badge", details: err });
  }
};

//! Delete
export const deleteService = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Service not found" });
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete badge", details: err });
  }
};
