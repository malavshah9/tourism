import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UpperFooter } from "./UpperFooter/UpperFooter";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <UpperFooter />
      <Footer />
    </div>
  );
};

export { Layout };
