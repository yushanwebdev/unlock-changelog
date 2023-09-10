import { pool } from "./";

export const getAllUpdates = async () => {
  const allUpdates = await pool.query(
    "SELECT id, title, updated_at FROM update"
  );
  return allUpdates.rows;
};

export const getUpdateById = async (id: number) => {
  const update = await pool.query(
    "SELECT id, title, content, updated_at FROM update WHERE id = $1",
    [id]
  );

  if (!update.rows[0]) {
    throw {
      status: 404,
      message: `Workout with id '${id}' not found.`,
    };
  }

  return update.rows[0];
};
