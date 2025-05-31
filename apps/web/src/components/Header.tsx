import React from "react";
import Logo from "@/assets/logo.png";
import { ModeToggle } from "./mode-toggle";
const Header = () => {
  return (
    <div className="flex items-center justify-between  text-white">
      <img src={Logo} alt="Logo" className="w-26" />
      <ModeToggle />
    </div>
  );
};

export default Header;
