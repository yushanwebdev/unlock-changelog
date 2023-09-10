import Header from "@/components/header";
import "./globals.css";
import { Tektur } from "next/font/google";

const interTight = Tektur({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Changelog</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${interTight.className} bg-black text-neutral-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
