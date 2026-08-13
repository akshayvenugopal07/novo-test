import express from "express";
import cors from "cors";
import { connectDb } from "./db.js";

const PORT = Number(process.env.PORT ?? 4000);

const db = connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", db: "connected" });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT} (SQLite connected)`);
});

process.on("exit", () => {
  db.close();
});
