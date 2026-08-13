import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "..", "data.db");

export function connectDb(): DatabaseSync {
  const db = new DatabaseSync(DB_PATH);
  return db;
}
