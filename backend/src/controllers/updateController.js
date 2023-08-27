const getAllUpdates = (req, res) => {
  try {
    res.send("Get all updates");
  } catch (error) {}
};

module.exports = {
  getAllUpdates,
};
