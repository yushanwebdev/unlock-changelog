import Container from "@/components/container";
import Log from "@/components/log";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getAllUpdates, getUpdateById } from "@/lib/api";
import Image from "next/image";

export default async function Info() {
  const allUpdates = await getAllUpdates();
  const update = await getUpdateById(allUpdates[0].id);

  return (
    <Container>
      <Log
        {...update}
        wrapperClass="text-white text-lg"
        timelineClass="items-start"
        dateClass="md:pt-6 md:top-0 md:translate-y-0"
      >
        <div className="md:flex-1 md:mb-20">
          <AspectRatio ratio={607 / 341} className="bg-muted mb-6">
            <Image
              src="https://images.unsplash.com/photo-1693031262676-05efcfb6a3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h2 className="text-3xl md:text-6xl mb-6">{update.title}</h2>
          <p>{update.content}</p>
        </div>
      </Log>
    </Container>
  );
}
