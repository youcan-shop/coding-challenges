import { allChallenges } from "contentlayer/generated";
import Link from "next/link";
import LayoutPublic from "@/components/layouts/public";

export default function Home() {
  return (
    <LayoutPublic>
      <div className="container flex flex-col gap-2 flex-1">
        {allChallenges.map((challenge, index) => (
          <Link href={challenge.url} key={index}>
            {challenge.title}
          </Link>
        ))}
      </div>
    </LayoutPublic>
  );
}
