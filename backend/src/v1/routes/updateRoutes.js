const express = require("express");
const router = express.Router();
const updateController = require("../../controllers/updateController");

router.get("/", updateController.getAllUpdates);

module.exports = router;
