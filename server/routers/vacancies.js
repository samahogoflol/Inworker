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

    if (modifiedVacancy.reviews && Array.isArray(modifiedVacancy.reviews)) {
      modifiedVacancy.reviews = modifiedVacancy.reviews.map((review) => {
        if (review.img && Array.isArray(review.img)) {
          review.img = review.img.map((relativePath) => {
            if (typeof relativePath === "string" && !relativePath.startsWith("http")) {
              return `${SERVER_URL}${relativePath}`;
            }
            return relativePath;
          });
        }
        return review;
      });
    }
    res.json(modifiedVacancy);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
