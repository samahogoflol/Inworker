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

module.exports = router;
