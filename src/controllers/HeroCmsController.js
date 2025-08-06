import Hero from "../models/HeroCmsModel.js";

export const createHero = async (req, res) => {
  try {
    const existing = await Hero.findOne();
    if (existing) {
      return res.status(400).json({ message: "Hero section already exists." });
    }
    const hero = new Hero(req.body);
    await hero.save();
    res.status(201).json(hero);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating hero", error: err.message });
  }
};

export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    if (!hero) return res.status(404).json({ message: "Hero not found" });
    res.json(hero);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching hero", error: err.message });
  }
};

export const updateHero = async (req, res) => {
  try {
    const hero = await Hero.findOneAndUpdate({}, req.body, { new: true });
    if (!hero) return res.status(404).json({ message: "Hero not found" });
    res.json(hero);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating hero", error: err.message });
  }
};

export const deleteHero = async (req, res) => {
  try {
    const hero = await Hero.findOneAndDelete();
    if (!hero) return res.status(404).json({ message: "Hero not found" });
    res.json({ message: "Hero deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting hero", error: err.message });
  }
};
