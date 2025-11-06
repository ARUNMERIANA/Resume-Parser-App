import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import resumeRoutes from "./routes/resumeRoutes.js";

// ✅ Load environment variables *before* using MONGO_URI
dotenv.config();

// ✅ Now define the MONGO_URI after loading .env
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/resumeparser";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/resumes", resumeRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));








