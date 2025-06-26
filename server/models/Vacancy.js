const mongoose = require("mongoose");

const VacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  pageTitle: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  contract: { type: String },
  workingHours: { type: String, required: true },
  premiums: { type: String },
  hostel: { type: String, required: true },
  reviews: [
    {
      customerName: { type: String, required: true },
      img: { type: [String] },
      date: { type: String, required: true },
      vacancyName: { type: String, required: true },
      review: { type: String, required: true },
    },
  ],
  img: {
    hostelFoto: { type: [String] },
    vacancyFoto: { type: String },
  },
  salary: {
    salaryPerHour: { type: String },
    studentsSalary: { type: String },
    salaryPerMonth: { type: String },
    night: { type: String },
    overtime: { type: String },
    weekendWork: { type: String },
  },
  responsibilities: {
    firstProcess: { type: String, required: true },
    secondProcess: { type: String, required: true },
    thirdProcess: { type: String, required: false },
    fourthProcess: { type: String, required: false },
    fifthProcess: { type: String, required: false },
  },
  requirements: {
    gender: { type: String, required: true },
    experience: { type: String, required: true },
    proficiency: { type: String, required: true },
    added: { type: String, required: true },
  },
});

module.exports = mongoose.model("Vacancy", VacancySchema);
