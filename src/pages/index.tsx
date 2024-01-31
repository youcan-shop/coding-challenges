import LayoutPublic from "@/components/layouts/public";
import Hero from "@/components/home/hero";
import Challenges from "@/components/home/challenges";

export default function Home() {
  return (
    <LayoutPublic>
      <div className="flex flex-col gap-12">
        <Hero />
        <Challenges />
        <div />
      </div>
    </LayoutPublic>
  );
}
