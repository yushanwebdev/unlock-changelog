import { Update } from "./types";

export async function getAllUpdates(): Promise<Update[]> {
  const res = await fetch("http://localhost:8080/api/v1/updates");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
}
