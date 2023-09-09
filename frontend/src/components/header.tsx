import Image from "next/image";
import Container from "./container";

export default function Header() {
  return (
    <Container>
      <div className="flex items-center gap-4 pt-4 text-sm font-semibold">
        <Image
          src="https://unlock-yushanwebdev.vercel.app/icon.png"
          alt="Yushan"
          width="24"
          height="24"
          className="mr-auto"
        />
        <a href="https://github.com/yushanwebdev/" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yushan-fernando/" target="_blank">
          LinkedIn
        </a>
      </div>
    </Container>
  );
}
