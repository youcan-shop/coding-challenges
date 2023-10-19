import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Nav: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
        return
      }

      setIsScrolling(false)
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "h-20 sticky top-0 animate duration-100 z-50",
        isScrolling ? "bg-white border-b" : "bg-primary/10"
      )}
    >
      <div className="container h-full flex items-center">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Logo className="w-20" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
