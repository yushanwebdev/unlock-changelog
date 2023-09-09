import { pool } from "./";

export const getAllUpdates = async () => {
  const allUpdates = await pool.query("SELECT * FROM update");
  return allUpdates.rows;
};
