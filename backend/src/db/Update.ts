import { pool } from "./";

export const getAllUpdates = async () => {
  const allUpdates = await pool.query(
    "SELECT id, title, updated_at FROM update"
  );
  return allUpdates.rows;
};
