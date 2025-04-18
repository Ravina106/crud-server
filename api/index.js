
// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "../routes/userRoute.js";
import { connectDB } from "./dbconnection.js";

// Load env variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
      // 'http://localhost:3000',  
      'https://crud-server-tan.vercel.app'
  ],
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true
}));

// Routes
app.use("/api", route);

// Optional root route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD server!");
});

// Connect to MongoDB
connectDB();

// Start server if not in Vercel (i.e. not production)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 7000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
  });
}

// Export for Vercel (serverless)
export default app;
