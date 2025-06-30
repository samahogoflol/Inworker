const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const connectDB = require("../server/service/database");
const vacanciesRoutes = require("../server/routers/vacancies");
const uploadRouter = require("./routers/upload");

connectDB();

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// оці use треба виносити в routes/index.js по факту ти тут описуєш свої роути вже. Ну і /api має бути всюди, на кожен запит, але ти тут трохи не так наконфігурив просто.
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/vacancies", vacanciesRoutes);
app.use("/upload", uploadRouter);

// отут можна додати `${port}/api` і тоді у тебе всі запити будуть по api ходити
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
