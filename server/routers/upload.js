const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

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
