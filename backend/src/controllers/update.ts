import express from "express";
import * as updateService from "../services/update";

export const getAllUpdates = async (
  req: express.Request,
  res: express.Response
) => {
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

export const getUpdateById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const update = await updateService.getUpdateById(Number(req.params.id));
    res.send({
      status: "OK",
      data: update,
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
