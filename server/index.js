const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("../server/service/database");
const vacanciesRoutes = require("../server/routers/vacancies");

connectDB();

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/vacancies", vacanciesRoutes);

app.get("/", (req, res) => {
  res.send("Server OK");
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
