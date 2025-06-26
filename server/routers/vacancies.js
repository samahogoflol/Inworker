// server/routers/vacancies.js

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

// !!! УВАГА: Якщо ви хочете додавати відгуки до ІСНУЮЧОЇ вакансії,
// ваш PATCH роут має використовувати $push, а не $set.
// Наразі він замінює весь об'єкт, якщо ви відправляєте reviews.
// Якщо ви використовуєте його тільки для оновлення інших полів, то ОК.
router.patch("/:id", async (req, res) => {
  try {
    // Якщо ви надсилаєте весь об'єкт reviews з Insomnia,
    // і хочете ДОДАТИ його до масиву reviews в базі даних,
    // то вам потрібен $push, а не $set.
    // Наприклад:
    // const { reviews, ...otherFields } = req.body;
    // const updateOperation = {};
    // if (Object.keys(otherFields).length > 0) {
    //     updateOperation.$set = otherFields;
    // }
    // if (reviews && reviews.length > 0) {
    //     updateOperation.$push = { reviews: { $each: reviews } };
    // }
    // const updatedVacancy = await Vacancy.findByIdAndUpdate(req.params.id, updateOperation, { new: true });

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

    // --- ДОДАНО LOG: Дані безпосередньо з бази даних ---
    console.log("Vacancy data FROM DB (before modification):", JSON.stringify(vacancy, null, 2));

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

    // --- ЛОГ: Чи є modifiedVacancy.reviews масивом? ---
    console.log("Is modifiedVacancy.reviews an Array?", Array.isArray(modifiedVacancy.reviews));

    if (modifiedVacancy.reviews && Array.isArray(modifiedVacancy.reviews)) {
      modifiedVacancy.reviews = modifiedVacancy.reviews.map((review) => {
        if (review.img && Array.isArray(review.img)) {
          review.img = review.img.map((relativePath) => {
            // <<< ВИПРАВЛЕНО ТУТ! review.img.map
            if (typeof relativePath === "string" && !relativePath.startsWith("http")) {
              return `${SERVER_URL}${relativePath}`;
            }
            return relativePath;
          });
        }
        return review;
      });
    }
    // Тепер не потрібен додатковий 'else if' блок для одиночного об'єкта reviews,
    // тому що за новою схемою reviews завжди має бути масивом.

    // --- ЛОГ: Дані після всіх модифікацій ---
    console.log("Vacancy data AFTER MODIFICATION (before sending to frontend):", JSON.stringify(modifiedVacancy, null, 2));

    res.json(modifiedVacancy);
  } catch (err) {
    console.error("Помилка при отриманні вакансії за ID:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
