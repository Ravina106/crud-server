import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/userRoute.js";



const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 7000;
const URL=process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
     console.log("DB connected successfully");
     app.listen(PORT,()=>{
        console.log(`Server is running on port:${PORT}`);
     })
}).catch(error=>console.log(error));

app.use("/api",route);


