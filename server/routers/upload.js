const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// зазвичай саму логіку для запиту не пишуть в руті, а створюють окрему папку controllers типу як і routes і там роблять вже логічні операції, а тут вже юзать методи звідти.
//https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueName + extension);
  },
});

const upload = multer({ storage });

router.post("/", upload.array("images", 10), (req, res) => {
  console.log(req.files);
  const filePaths = req.files.map((file) => `/uploads/${file.filename}`);
  res.status(200).json({ uploaded: filePaths });
});

module.exports = router;
