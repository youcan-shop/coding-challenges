import { allChallenges } from "contentlayer/generated";
import { Swords } from "lucide-react";
import Link from "next/link";

const Challenges = () => {
  return (
    <div className="container flex flex-col gap-2" id="challenges">
      {allChallenges.map((challenge) => (
        <Link
          href={challenge.url}
          className="bg-gray-300/10 hover:bg-primary/10 animate duration-100 p-4 rounded-md flex items-center justify-between"
          key={challenge._raw.flattenedPath}
        >
          <p>{challenge.title}</p>
          <Swords className="w-4 h-4" />
        </Link>
      ))}
    </div>
  );
};

export default Challenges;
