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

    const SERVER_URL = process.env.SERVER_URL || "http://localhost:5000";

    const modifiedVacancy = vacancy.toObject();

    if (modifiedVacancy.img && Array.isArray(modifiedVacancy.img.hostelFoto)) {
      modifiedVacancy.img.hostelFoto = modifiedVacancy.img.hostelFoto.map((relativePath) => {
        if (typeof relativePath === "string" && !relativePath.startsWith("http")) {
          return `${SERVER_URL}${relativePath}`;
        }
        return relativePath;
      });
    }
    if (
      modifiedVacancy.img &&
      modifiedVacancy.img.vacancyFoto &&
      typeof modifiedVacancy.img.vacancyFoto === "string" &&
      !modifiedVacancy.img.vacancyFoto.startsWith("http")
    ) {
      modifiedVacancy.img.vacancyFoto = `${SERVER_URL}${modifiedVacancy.img.vacancyFoto}`;
    }
    res.json(modifiedVacancy);
  } catch (err) {
    console.error("Помилка при отриманні вакансії за ID:", err.message);
    res.status(500).json({ message: "Error getting vacancy", error: err.message });
  }
});

module.exports = router;
