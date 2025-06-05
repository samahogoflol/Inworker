const mongoose = require("mongoose");

const uri = "mongodb+srv://DenysInWorker:Samahogoflol120!@inworker.uhoit7m.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
