import express from "express";
import { getAllUpdates } from "../../controllers/update";

export default (router: express.Router) => {
  router.get("/updates", getAllUpdates);
};
