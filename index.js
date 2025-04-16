// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import route from "./routes/userRoute.js";



// const app=express();
// app.use(express.json());
// app.use(cors());
// dotenv.config();

// const PORT=process.env.PORT || 7000;
// const URL=process.env.MONGOURL;

// mongoose.connect(URL).then(()=>{
//      console.log("DB connected successfully");
//      app.listen(PORT,()=>{
//         console.log(`Server is running on port:${PORT}`);
//      })
// }).catch(error=>console.log(error));

// app.use("/api",route);



import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/userRoute.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", route);

// Connect to MongoDB (only when not in Vercel environment)
const URL = process.env.MONGOURL;

// Handle MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error);
    // Don't exit the process in serverless environment
    // process.exit(1);
  }
};

// Connect to MongoDB when not in serverless context
if (process.env.NODE_ENV !== 'production') {
  connectDB();
  const PORT = process.env.PORT || 7000;
  app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
  });
}

// This will handle the MongoDB connection in Vercel
if (process.env.NODE_ENV === 'production') {
  connectDB();
}

// Export the Express API
export default app;


