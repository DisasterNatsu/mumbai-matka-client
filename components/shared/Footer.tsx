import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 max-w-[1440px] mx-auto px-3 border-t dark:border-white my-6">
      <div className="flex sm:flex-row flex-col justify-evenly gap-10 lg:gap-0 mt-5">
        {/* left */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h1 className="text-xl font-semibold">Important Links</h1>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Previous Links
          </Link>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Tips
          </Link>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Suggestions
          </Link>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Profit Calculator
          </Link>
        </div>
        {/* middle */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h1 className="text-xl font-semibold">Contact us</h1>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Email
          </Link>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Need Help?
          </Link>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            Feedback
          </Link>
        </div>
        {/* right */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h1 className="text-xl font-semibold">Join us</h1>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            As an expert
          </Link>
          <Link
            href={"#"}
            className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
          >
            As info provider
          </Link>
        </div>
      </div>
      <h1 className="text-center h-10 mt-3">
        © 2023-2024 kolkataff.space | Made with ❤️ by{" "}
        <Link
          href={"mailto:shilajitdutta44@gmail.com"}
          className="hover:text-siteAccentLight/80 dark:hover:text-siteAccentDark"
        >
          Shilajit
        </Link>
      </h1>
    </footer>
  );
};

export default Footer;
