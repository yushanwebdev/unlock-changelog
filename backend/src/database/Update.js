const { pool } = require("./");

const getAllUpdates = async () => {
  const allUpdates = await pool.query("SELECT * FROM update");
  return allUpdates.rows;
};

module.exports = {
  getAllUpdates,
};
