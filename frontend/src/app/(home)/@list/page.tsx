import Container from "@/components/container";
import Log from "@/components/log";
import { getAllUpdates } from "@/lib/api";

export default async function List() {
  const allUpdates = await getAllUpdates();

  return (
    <Container>
      {allUpdates.map((update) => (
        <Log key={update.id} {...update} />
      ))}
    </Container>
  );
}
