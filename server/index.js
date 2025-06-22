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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/vacancies", vacanciesRoutes);
app.use("/upload", uploadRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
