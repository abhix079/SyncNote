import express from "express";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoute.js";
import authRoutes from "./routes/authRoute.js";
import msgRoute from "./routes/msgRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI ;



app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sendMsg",msgRoute);
app.use("/api/",noteRoutes);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err.message);
  });