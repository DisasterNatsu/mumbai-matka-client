import Roulette from "@/components/luckyNumber/Roulette";
import React from "react";
import PattiTips from "../../../components/luckyNumber/PattiTips";
import SocialButton from "@/components/shared/SocialButtons";
import Link from "next/link";

const LuckyNumber = () => {
  return (
    <>
      <title>Mumbai Matka | Luckly Number</title>
      <meta name="title" content="Mumbai Matka | Luckly Number [2024]" />
      <meta
        name="description"
        content="Mumbai Matka Lucky Number 2024 Lucky Number, Jay Guru Today Free Tips"
      />
      <link rel="canonical" href="https://smartmumbaimatka.in/lucky-number" />
      <meta property="og:title" content="Mumbai Matka | Luckly Number [2024]" />
      <meta
        property="og:description"
        content="Mumbai Matka Lucky Number 2024 Lucky Number, Jay Guru Today Free Tips"
      />
      <div className="w-full h-full mt-5">
        <section className="flex w-full md:flex-row flex-col items-center md:items-start gap-5 md:gap-10 md:px-5">
          <Roulette />

          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-2xl md:text-3xl">
              Lucky Number Wheel
            </h1>
            <p>
              Welcome to the Lucky Number Wheel! Spin the wheel to discover your
              lucky number ranging from 0 to 9. Simply click the
              &ldquo;Spin&rdquo; button to set the wheel in motion and reveal
              your fortune!
            </p>

            <h2 className="font-semibold md:text-2xl text-xl md">
              How to play:
            </h2>
            <ul className="list-disc pl-5">
              <li>Click the &ldquo;Spin&rdquo; button to start the wheel.</li>
              <li>The wheel will spin and stop randomly on a number.</li>
              <li>Your lucky number will be displayed once the wheel stops.</li>
            </ul>

            <p>
              Are you ready to uncover your destiny? Spin the wheel now and see
              what luck has in store for you!
            </p>
          </div>
        </section>

        <PattiTips />

        <section className="my-5 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-3xl">
            Come join us for free Mumbai Matka tips and realtime updates of the
            result
          </h2>
          <h3 className="font-semibold text-2xl my-4">
            Here is what you need to do
          </h3>
          <ul className="list-disc space-y-3">
            <li>
              On this website we update daily Mumbai Matka And Smart Mumbai
              Matka Result as soon as possible.
            </li>
            <li>
              Just remember Mumbai Matka in you can find our website link
              quickly by searching on Google mumbaimatka.in
            </li>
            <li>
              Bookmark this website for quick updates. Mumbai Matka tips dekho
              aur jeeto (*har bazi tips sirf yaha milega)
            </li>
          </ul>
        </section>

        <SocialButton />

        <section className="mt-5 w-full flex flex-col space-y-5 items-center justify-center">
          <Link
            href={"/"}
            className="accent-colors w-full text-center rounded-md py-3 font-bold hover:scale-105 duration-500 md:text-3xl text-xl"
          >
            Today&apos;s Results
          </Link>
          <Link
            href={"/tips"}
            className="accent-colors w-full text-center rounded-md py-3 font-bold hover:scale-105 duration-500 md:text-3xl text-xl"
          >
            Tips
          </Link>
        </section>
      </div>
    </>
  );
};

export default LuckyNumber;
