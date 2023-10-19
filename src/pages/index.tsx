import LayoutPublic from "@/components/layouts/public";
import Hero from "@/components/home/Hero";
import { allChallenges } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <LayoutPublic>
      <div className="flex flex-col gap-12">
        <Hero />

        <div className="container flex flex-col gap-2">
          {allChallenges.map((challenge) => (
            <Link
              href={challenge.url}
              className="bg-gray-300/10 hover:bg-primary/10 animate duration-100 p-4 rounded-md flex items-center justify-between"
              key={challenge._raw.flattenedPath}
            >
              <p>{challenge.title}</p>
              <Button variant="ghost" size="sm">
                <Swords className="w-4 h-4" />
              </Button>
            </Link>
          ))}
        </div>
        <div />
      </div>
    </LayoutPublic>
  );
}
