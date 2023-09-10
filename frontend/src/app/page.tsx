import Container from "@/components/container";
import LogsList from "@/components/log-list";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="pt-10">
          <h1 className="mb-8 text-5xl lg:text-8xl font-medium">Changelog</h1>
          <LogsList />
        </div>
      </Container>
    </main>
  );
}
