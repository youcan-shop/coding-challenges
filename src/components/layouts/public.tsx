import React from "react";
import Nav from "../shared/nav";
import Footer from "../shared/footer";

interface LayoutPublicProps {
  children?: React.ReactNode;
}

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const jetbrains = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const LayoutPublic: React.FC<LayoutPublicProps> = ({ children }) => {
  return (
    <main className={cn("min-h-[100dvh] flex flex-col", jetbrains.className)}>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default LayoutPublic;
