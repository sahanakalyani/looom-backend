import "dotenv/config";
import express from "express";
import { pool } from "./db.js";
import { initDatabase } from "../db/init.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middleware/error.js";
import { auth } from "./middleware/auth.js";
import  postsRoutes  from "./routes/posts.routes.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API server is running" });
});

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/posts", postsRoutes);

app.get("/protected", auth, (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
});

app.get("/normal", (req, res) => {
  res.json({ message: "No Need for authenticated" });
});


app.use(errorHandler); //must be last

async function startServer() {
  try {
    await pool.query("SELECT 1");
    console.log("Database connection verified");
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`server is running on:http://Localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
startServer();