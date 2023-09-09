import express from "express";
import update from "./update";

const router = express.Router();

export default (): express.Router => {
  update(router);

  return router;
};
