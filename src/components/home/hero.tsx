import { Swords } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import challengeImage from "@/../public/challenge.png";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const words = useMemo(() => ["Elevate", "Enhance", "Boost", "Improve"], []);
  const [motivationWord, setMotivationWord] = useState(words[0]);

  useEffect(() => {
    let index = 1;

    const id = setInterval(() => {
      setMotivationWord(words[index]);
      index += 1;

      if (words.length === index) {
        index = 0;
      }
    }, 1500);

    return () => {
      clearInterval(id);
    };
  }, [words, setMotivationWord]);

  return (
    <div className="min-h-[600px] bg-primary/10 flex items-stretch">
      <div className="container grid lg:grid-cols-2 items-center gap-16 md:gap-32 py-8 lg:py-0">
        <div className="flex flex-col gap-6 text-center items-center lg:items-start lg:text-start max-w-xl mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold leading-tight">
              <p className="text-primary inline">{motivationWord}</p> Your Web
              Development Skills with YouCan-Challenge
            </h1>
            <p className="text-sm lg:text-base">
              Join YouCan Challenges to Master Web Development, Level Up Your
              Skills, and Lead the Digital Revolution!
            </p>
          </div>
          <Button className="w-fit" asChild>
            <Link href="#challenges">
              <Swords className="w-4 h-4" />
              Challenge Now
            </Link>
          </Button>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={challengeImage}
            alt="Challenge excample"
            className="shadow-xl rounded-md rotate-6 w-full max-w-lg"
            priority
            width="1920"
            height="1800"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
