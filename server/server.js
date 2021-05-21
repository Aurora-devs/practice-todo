import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import todoRoute from "./routes/todoRoute.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleWare.js";

dotenv.config();
// call our db func
connectDB();

const app = express();
app.use(express.json());

app.use(cors());

// our api routes
app.use("/api", todoRoute);

// our middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT} `));
