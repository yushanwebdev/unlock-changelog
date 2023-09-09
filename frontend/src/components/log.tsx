import Link from "next/link";

export default function Log() {
  return (
    <Link href="/abc">
      <div className="flex flex-col items-center text-xl text-center md:flex-row lg:text-2xl logs-list-item text-neutral-400 relative z-[1] md:pl-36 md:gap-6 lg:pl-44 lg:gap-8">
        <div className="py-4 relative z-[1] before:content-[''] before:absolute before:z-[1] before:left-1/2 before:w-[1px] before:bg-zinc-800 before:h-full before:top-0 data-[order='1']:before:top-4 data-[order='1']:before:h-[calc(100%-1rem)]">
          <div className="flex items-center justify-center w-12 h-12 text-base rounded-full bg-zinc-800 relative z-[2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              fill="currentcolor"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
          </div>
        </div>
        <span className="mb-3 md:mb-0 md:absolute md:z-[1] md:left-0">
          May 17, 2023
        </span>
        <p>PHP support, faster microVMs and better stability</p>
      </div>
    </Link>
  );
}
