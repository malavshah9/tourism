import { FooterLogo } from "@/app/icons";
import React from "react";
import { Button } from "../Button";
import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
  const onToggleMenu = () => {
    console.log(" this called ");
  };
  return (
    <nav className={navbarStyle.nav}>
      <FooterLogo childPathColor="#001A1A" />
      <div>Open</div>
      <ul className={navbarStyle.menu}>
        <li className={navbarStyle.item}>Home</li>
        <li className={navbarStyle.item}>Surfing</li>
        <li className={navbarStyle.item}>Hulo</li>
        <li className={navbarStyle.item}>Vulcano</li>
      </ul>
      <Button className={navbarStyle.btn}>Book a trip</Button>
    </nav>
  );
};

export { Navbar };
