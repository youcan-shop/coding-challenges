import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="h-20">
      <div className="container h-full border-b flex items-center">
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
