import Logo from "@/components/shared/logo";
import MDX from "@/components/ui/mdx";
import { Challenge as IChallenge, allChallenges } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

interface ChallengeProps {
  challenge: IChallenge;
}

const Challenge: React.FC<ChallengeProps> = ({ challenge }) => {
  return (
    <main className="flex flex-col gap-12">
      <nav className="h-20">
        <div className="container h-full border-b flex items-center">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Logo className="w-20" />
            </Link>
            <div>
              <Link href="/challenges">Challenges</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container max-w-3xl flex flex-col gap-8">
        <h1 className="inline-block text-4xl font-extrabold leading-tight lg:text-5xl text-primary">
          {challenge.title}
        </h1>
        <MDX code={challenge.body.code} />
      </div>

      <footer className="h-16 border-t justify-center flex items-center">
        © Copyright YouCan Challenge 2023
      </footer>
    </main>
  );
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const id = ctx.params?.id;
  const challenge = allChallenges.find(
    (challenge) => challenge._raw.flattenedPath === id
  );

  return {
    props: {
      challenge,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allChallenges.map((challenge) => ({
    params: {
      id: challenge._raw.flattenedPath,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Challenge;
