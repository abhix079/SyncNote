import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/noteRoute.js";
import authRoutes from "./routes/authRoute.js";
import contactRoutes from "./routes/contactRoutes.js"; // make sure this is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", noteRoutes);
app.use("/api/contact", contactRoutes); // matches frontend

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/ping",(req,res)=>{
  res.status(200).json({
    message:"Backend is pinging successfully"
  })
})

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
