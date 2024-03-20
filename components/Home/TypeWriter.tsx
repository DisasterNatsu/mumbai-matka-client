"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import SocialButton from "../shared/SocialButtons";

const TypeWriter = () => {
  return (
    <div className="grid md:grid-cols-2 w-full px-0 my-5">
      {/* Left */}
      <div className="flex flex-col gap-5 justify-center p-5">
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center md:text-left">
          One stop solution for <br />
          <span className="font-semibold md:mt-2">
            <Typewriter
              options={{
                strings: ["Kokata FF", "Smart Matka", "Mumbai Matka"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <SocialButton home={true} />
        <a
          href="https://kolkataff.space"
          className="flex items-center justify-center gap-2 border-2 dark:border-siteAccentDark border-siteAccentLight py-2 rounded-md md:w-[265px] w-full mx-auto md:mx-0 font-semibold"
        >
          <Image
            src={"/logo.png"}
            alt="kolkata ff logo"
            height={40}
            width={40}
            className="w-auto h-auto"
          />{" "}
          Kolkata FF Result
        </a>
      </div>
      {/* Right */}
      <div className="w-full p-2 md:flex md:justify-end hidden">
        <Image
          src="/logo.png"
          alt="image"
          width={300}
          height={300}
          className="rounded-md w-auto"
          priority
        />
      </div>
    </div>
  );
};

export default TypeWriter;
