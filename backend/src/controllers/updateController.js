const updateService = require("../services/updateService");

const getAllUpdates = async (_, res) => {
  try {
    const allUpdates = await updateService.getAllUpdates();
    res.send({
      status: "OK",
      data: allUpdates,
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: {
        error: error?.message || error,
      },
    });
  }
};

module.exports = {
  getAllUpdates,
};
