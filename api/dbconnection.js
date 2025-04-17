// dbconnection.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGOURL;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("✅ DB connected successfully");
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
};
