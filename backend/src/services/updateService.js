const Update = require("../database/Update");

const getAllUpdates = async () => {
  const allUpdates = await Update.getAllUpdates();
  return allUpdates;
};

module.exports = {
  getAllUpdates,
};
