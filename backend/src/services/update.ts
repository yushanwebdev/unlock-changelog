import * as Update from "../db/Update";

export const getAllUpdates = async () => {
  const allUpdates = await Update.getAllUpdates();
  return allUpdates;
};
