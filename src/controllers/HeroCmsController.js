import Hero from "../models/HeroCmsModel.js";

export const createHero = async (req, res) => {
  try {
    // Check if a hero document exists
    let hero = await Hero.findOne();

    if (hero) {
      // Update the existing hero document
      hero.set(req.body);
      await hero.save();
      return res.status(200).json({ message: "Hero section updated.", hero });
    } else {
      // Create a new hero document
      hero = new Hero(req.body);
      await hero.save();
      return res.status(201).json({ message: "Hero section created.", hero });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error creating/updating hero",
      error: err.message,
    });
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
