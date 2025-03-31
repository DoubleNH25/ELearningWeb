import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";


dotenv.config({});
connectDB();
const app = express();

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

const PORT = process.env.PORT || 3000;

//apis
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})
 