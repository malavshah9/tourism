import React, { useState } from "react";
import { Drawer } from "antd";
import { Cross, FooterLogo, Menu } from "@/app/icons";
import { Button } from "../Button";
import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen((i) => !i);
  };

  return (
    <nav className={navbarStyle.nav}>
      <FooterLogo childPathColor="#001A1A" />
      <Button
        variant="icon"
        onClick={onToggleMenu}
        className={navbarStyle.toggle}
      >
        <Menu />{" "}
      </Button>
      <ul
        className={
          navbarStyle.menu + " " + (isMenuOpen ? navbarStyle.active : "")
        }
      >
        <li className={navbarStyle.item}>Home</li>
        <li className={navbarStyle.item}>Surfing</li>
        <li className={navbarStyle.item}>Hulo</li>
        <li className={navbarStyle.item}>Vulcano</li>
      </ul>

      <Button className={navbarStyle.btn}>Book a trip</Button>
      <Drawer
        placement="right"
        open={isMenuOpen}
        onClose={onToggleMenu}
        width="85%"
        headerStyle={{
          display: "none",
        }}
      >
        <div className={navbarStyle.drawerContainer}>
          <Button
            onClick={onToggleMenu}
            variant="icon"
            className={navbarStyle.close}
          >
            <Cross />
          </Button>
          <ul className={navbarStyle.drawerItems}>
            <li className={navbarStyle.item}>Home</li>
            <li className={navbarStyle.item}>Surfing</li>
            <li className={navbarStyle.item}>Hulo</li>
            <li className={navbarStyle.item}>Vulcano</li>
          </ul>
          <Button>Book a trip</Button>
        </div>
      </Drawer>
    </nav>
  );
};

export { Navbar };
