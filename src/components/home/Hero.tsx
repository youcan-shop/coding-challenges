import { Swords } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import challengeImage from "@/../public/challenge.png";

const Hero = () => {
  return (
    <div className="min-h-[600px] bg-primary/10 flex items-stretch">
      <div className="container grid grid-cols-2 items-center gap-32">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold leading-tight ">
              Elevate Your Web Development Skills with YouCan-Challenge
            </h1>
            <p>
              Join YouCan Challenges to Master Web Development, Level Up Your
              Skills, and Lead the Digital Revolution!
            </p>
          </div>
          <Button className="w-fit" size="lg">
            <Swords className="w-4 h-4" />
            Challenge Now
          </Button>
        </div>
        <div className="relative">
          <Image
            src={challengeImage}
            alt=""
            className="shadow-xl rounded-md rotate-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
