import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mangoURI: string =
  "mongodb+srv://anzel:08vWXvSHRYZkSiFL@personalfinance.5p3yc.mongodb.net/";

mongoose
  .connect(mangoURI)
  .then(() => console.log("Connected to MONGODB!"))
  .catch((err) => console.error("Failed To Connect MNAGODB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
