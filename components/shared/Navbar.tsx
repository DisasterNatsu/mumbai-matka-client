"use client";

import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { NavData } from "@/Constants/NavData";
import { Button } from "../ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // get pathname

  const path = usePathname();

  return (
    <header className="px-2 py-3">
      {/* desktop nav bar */}

      <nav className="w-full h-full lg:flex hidden justify-between">
        {/* icon and text */}

        <div className="flex items-center justify-center gap-x-5">
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center cursor-pointer">
              <Image
                src="/smartmumbailogo.png"
                alt="logo"
                width={70}
                height={70}
                className="h-auto"
              />
              <div className="flex flex-col -space-y-1">
                <h1 className="-ml-1 text-lg xl:text-xl font-bold">
                  Mumbai Matka
                </h1>
                <p className="-ml-1 text-xs">🚀 Sabse pahele result 🚀</p>
              </div>
            </Link>
          </div>

          {/* links */}

          <ul className="flex h-full items-center space-x-1 text-base font-semibold">
            {NavData.map((navLinks: NavDataType) => (
              <li key={navLinks.path}>
                <Link
                  href={navLinks.path}
                  className="p-3 text-sm xl:text-base rounded-md hover:bg-slate-900 hover:text-white"
                >
                  {navLinks.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* auth and theme toggle */}

        <div className="flex space-x-2 h-full items-center">
          <Button className="md:hidden xl:flex">Sign In</Button>
          <Button variant={"outline"} className="md:hidden xl:flex">
            Register
          </Button>
          <ThemeToggle />
        </div>
      </nav>

      <nav className="lg:hidden flex justify-between px-1">
        <div className="flex items-center">
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu aria-hidden="true" className="h-7 w-7" />
            <span className="sr-only">Open main menu</span>
          </button>
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            isAuth={isAuth}
            setIsAuth={setIsAuth}
          />
          <div className="flex items-center space-x-2">
            <Link href={"/"} className="flex items-center cursor-pointer">
              <Image
                src="/smartmumbailogo.png"
                alt="logo"
                width={70}
                height={70}
              />
              <div className="flex flex-col -space-y-1">
                <h1 className="-ml-2 text-lg xl:text-xl font-bold">
                  Mumbai Matka
                </h1>
                <p className="-ml-2 text-xs">🚀 Sabse pahele result 🚀</p>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
