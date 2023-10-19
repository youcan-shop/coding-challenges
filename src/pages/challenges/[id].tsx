import LayoutPublic from "@/components/layouts/public";
import MDX from "@/components/ui/mdx";
import { Challenge as IChallenge, allChallenges } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";

interface ChallengeProps {
  challenge: IChallenge;
}

const Challenge: React.FC<ChallengeProps> = ({ challenge }) => {
  return (
    <LayoutPublic>
      <div className="container max-w-3xl flex flex-col gap-8 py-16">
        <h1 className="inline-block text-4xl font-extrabold leading-tight lg:text-5xl text-primary">
          {challenge.title}
        </h1>
        <MDX code={challenge.body.code} />
      </div>
    </LayoutPublic>
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
