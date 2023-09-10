import Container from "@/components/container";
import Log from "@/components/log";
import { getAllUpdates } from "@/lib/api";

export default async function List() {
  const allUpdates = await getAllUpdates();

  return (
    <Container>
      {allUpdates.slice(1).map((update) => (
        <Log key={update.id} {...update}>
          <p className="md:flex md:items-center">{update.title}</p>
        </Log>
      ))}
    </Container>
  );
}
