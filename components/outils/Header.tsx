import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:px-12 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Lova <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gep-8">
          <Nav />
          <Link href={"contact"} className="mx-6">
            <Button>Embauchez-moi</Button>
          </Link>
        </div>
        <div className=" lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
