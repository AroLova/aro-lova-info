"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link"; // ⚠️ tu avais pris "Link" depuis lucide-react par erreur

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "cv", path: "/cv" },
  { name: "travail", path: "/travail" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Lova <span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center  items-center gap-8 mt-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path == pathname &&
                  "text-accent border-b-2 border-accent "
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
