import React from "react";
import Nav from "../shared/nav";
import Footer from "../shared/footer";

interface LayoutPublicProps {
  children?: React.ReactNode;
}

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Head from "next/head";
const jetbrains = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const LayoutPublic: React.FC<LayoutPublicProps> = ({ children }) => {
  return (
    <main className={cn("min-h-[100dvh] flex flex-col", jetbrains.className)}>
      <Head>
        <title>YouCan-Challenge</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore YouCan's tech challenges, innovation, and problem-solving initiatives. Join us in the journey of pushing the boundaries of technology."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ycan-challenge" />
        <meta
          name="twitter:title"
          content="YouCan-Challenge | Innovation in Actio"
        />
        <meta
          name="twitter:description"
          content="Explore YouCan's tech challenges, innovation, and problem-solving initiatives. Join us in the journey of pushing the boundaries of technology."
        />
        <meta
          name="twitter:image"
          content="https://ycan-challenge.yerapos.com/OG.png"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouCan-Challenge | Innovation in Actio"
        />
        <meta
          property="og:description"
          content="Explore YouCan's tech challenges, innovation, and problem-solving initiatives. Join us in the journey of pushing the boundaries of technology."
        />
        <meta
          property="og:image"
          content="https://ycan-challenge.yerapos.com/OG.png"
        />
        <meta
          property="og:url"
          content="https://ycan-challenge.yerapos.com/OG.png"
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default LayoutPublic;
