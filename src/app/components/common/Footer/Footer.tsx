import React from "react";
import footerStyle from "./Footer.module.css";
import { FooterLogo } from "@/app/icons";

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.container}>
        <FooterLogo />
      </div>
    </div>
  );
};

export { Footer };
