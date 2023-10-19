import React from "react";
import Nav from "../shared/nav";
import Footer from "../shared/footer";

interface LayoutPublicProps {
  children?: React.ReactNode;
}

const LayoutPublic: React.FC<LayoutPublicProps> = ({ children }) => {
  return (
    <main className="min-h-[100dvh] flex flex-col gap-12">
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default LayoutPublic;
