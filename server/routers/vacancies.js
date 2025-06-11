const express = require("express");
const router = express.Router();
const Vacancy = require("../models/Vacancy");

router.get("/", async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.json(vacancies);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch vacancies" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newVacancy = new Vacancy(req.body);
    const savedVacancy = await newVacancy.save();

    res.status(201).json(savedVacancy);
  } catch (error) {
    console.error("❌ Error adding vacancy:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedVacancy = await Vacancy.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    if (!updatedVacancy) {
      return res.status(404).json({ message: "Vacancy not found" });
    }

    res.status(200).json(updatedVacancy);
  } catch (error) {
    console.error("❌ Error updating vacancy:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(vacancy);
  } catch (err) {
    res.status(500).json({ message: "Error getting vacancy", error: err.message });
  }
});

module.exports = router;
