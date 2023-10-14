import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo12.svg";
import MobileNav from "./MobileNav";
//import link
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="backdrop-blur-sm backdrop-brightness-100 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/portfolio-dias"} className="max-w-[200px]">
          <img src={Logo} aLt="" />
        </Link>

        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/portfolio-dias"}
            className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>

          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition">
            About
          </Link>

          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition">
            Portfolio
          </Link>

          <Link
            to={"/skill"}
            className="text-[#696c6d] hover:text-primary transition">
            Skill
          </Link>

          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
}

export default Header;
