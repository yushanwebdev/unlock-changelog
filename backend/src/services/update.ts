import * as Update from "../db/Update";

export const getAllUpdates = async () => {
  const allUpdates = await Update.getAllUpdates();
  return allUpdates;
};

export const getUpdateById = async (id: number) => {
  const update = await Update.getUpdateById(id);
  return update;
};
