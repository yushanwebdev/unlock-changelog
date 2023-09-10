import express from "express";
import { getAllUpdates, getUpdateById } from "../../controllers/update";

export default (router: express.Router) => {
  router.get("/updates", getAllUpdates);
  router.get("/updates/:id", getUpdateById);
};
