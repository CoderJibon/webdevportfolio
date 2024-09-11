"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const showNavHandler = (): void => {
    setShowNav(true);
  };
  const closeNavHandler = (): void => {
    setShowNav(false);
  };
  return (
    <div>
      <Navbar openNav={showNavHandler}></Navbar>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}></MobileNav>
    </div>
  );
}

export default ResponsiveNav;
