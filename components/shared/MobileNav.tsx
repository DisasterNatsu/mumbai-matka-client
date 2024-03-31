"use client";

import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { LogIn, LogOut, NotebookPen, X } from "lucide-react";
import Image from "next/image";
import { NavData } from "@/Constants/NavData";
import { useRouter } from "next/navigation";

const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  const router = useRouter();

  const handleRedirectHome = () => {
    router.push("/");

    return setMobileMenuOpen(false);
  };

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed flex flex-col inset-y-0 left-0 z-10 w-full overflow-y-auto dark:bg-slate-900 bg-slate-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        {/* top section with close button */}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={handleRedirectHome} className="flex items-center">
              <Image
                src="/smartmumbailogo.png"
                alt="logo"
                width={40}
                height={40}
              />
              <h2>
                <p className="md:text-2xl font-semibold text-left">
                  Mumbai{" "}
                  <span className="text-siteAccentLight dark:text-siteAccentDark">
                    Matka
                  </span>
                </p>
                <p className="text-xs -mt-1 text-left">
                  🚀 Sabse pahele result 🚀
                </p>
              </h2>
            </button>
          </div>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Clone menu</span>
            <X
              className="w-6 h-6 dark:text-white text-black"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Show if user is logged in */}

        <div className="mt-6 flow-root flex-grow">
          <div className="divide-y h-full">
            <div className="flex flex-col h-full justify-between">
              {/* Links */}

              <div className="py-6 flex-grow flex flex-col space-y-5">
                {NavData.map((navItem) => (
                  <Link
                    href={navItem.path}
                    key={navItem.title}
                    className="nav-link-mobile flex gap-2 my-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {navItem.icon}
                    {navItem.title}
                  </Link>
                ))}
              </div>
              <hr className="mb-5" />

              <div className="flex flex-col gap-5">
                <Link href={"/log-in"} className="flex gap-4 nav-link-mobile">
                  <LogIn /> Log In
                </Link>
                <Link href={"/register"} className="flex gap-4 nav-link-mobile">
                  <NotebookPen /> Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileNav;
