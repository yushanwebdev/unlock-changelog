import { Update } from "./types";

export async function getAllUpdates(): Promise<Update[]> {
  const res = await fetch(`${process.env.PUBLIC_API}/updates`);

  if (!res.ok) {
    throw new Error("Failed to fetch all the updates");
  }

  return (await res.json()).data;
}

export async function getUpdateById(id: number): Promise<Update> {
  const res = await fetch(`${process.env.PUBLIC_API}/updates/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch the update");
  }

  return (await res.json()).data;
}
