import mongoose from "mongoose";

export default async function connectDB(URL: string) {
  try {
    await mongoose.connect(URL);
    console.log("Connected to DB.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
