import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "API server is running" });
});

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on :http://Localhost:${PORT}`);
    });
  } catch (err) {
    console.error("err");
  }
}
startServer();
