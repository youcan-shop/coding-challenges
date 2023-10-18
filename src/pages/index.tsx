import Image from "next/image";
import { Inter } from "next/font/google";
import { allChallenges } from "contentlayer/generated";
import Link from "next/link";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn(inter.className, "flex flex-col gap-2 m-4")}>
      {allChallenges.map((challenge, index) => (
        <Link href={challenge.url} key={index}>
          {challenge.title}
        </Link>
      ))}
    </main>
  );
}
