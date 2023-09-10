import { Update } from "./types";

export async function getAllUpdates(): Promise<Update[]> {
  const res = await fetch("https://unlock-changelog.fly.dev/api/v1/updates");

  if (!res.ok) {
    throw new Error("Failed to fetch all the updates");
  }

  return (await res.json()).data;
}

export async function getUpdateById(id: number): Promise<Update> {
  const res = await fetch(
    `https://unlock-changelog.fly.dev/api/v1/updates/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch the update");
  }

  return (await res.json()).data;
}
