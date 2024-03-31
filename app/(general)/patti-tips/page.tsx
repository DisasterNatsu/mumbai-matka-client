import RepeatPatti from "@/components/patti-tips/RepeatPatti";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TimeArr } from "@/Constants/NumberArray";
import { DateFormatter } from "@/helpers/DateFormatter";
import { QueryDateFormatter } from "@/helpers/QueryDateFormatter";
import { Axios } from "@/utils/AxiosConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getTips = async (date: string) => {
  const request = await Axios.get(`/get/patti-tips/${date}`);

  const response = await request.data;

  return response;
};

const getRepeatTips = async () => {
  const res = await Axios.get("/get/repeat-patti");

  const repeatPatti = await res.data;

  if (repeatPatti) {
    return { repeatPatti };
  }

  return { repeatPatti: null };
};

const PattiTips = async () => {
  const date = QueryDateFormatter();

  const data = await getTips(date);

  const { formattedDate } = DateFormatter();

  const { repeatPatti } = await getRepeatTips();

  return (
    <>
      <title>Smart Matka | Patti Tips</title>
      <meta
        name="description"
        content="Yaha Pe Daily Mumbai Smart Matka Tips for those who are confused what to play we provide a general solution"
      />
      <meta property="og:title" content="Smart Matka | Patti Tips" />
      <meta
        property="og:url"
        content="https://smartmumbaimatka.in/patti-tips"
      />
      <meta
        property="og:description"
        content="Yaha Pe Daily Mumbai Smart Matka Tips for those who are confused what to play we provide a general solution"
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://smartmumbaimatka.in/patti-tips" />

      <div className="flex md:items-start justify-center items-center mt-4 flex-col space-y-3">
        <h1 className="font-bold text-2xl border-b dark:border-white pb-1 border-black">
          Smart Matka Patti Tips
        </h1>

        <p className="text-lg text-center md:text-start">
          Here we are providing daily <strong>Smart Matka tips</strong> today
          lucky numbers and Baji updates.
        </p>

        <p className="text-lg text-center md:text-start">
          While it&apos;s primarily a game of chance, there are some tips.
        </p>

        <p className="text-lg text-center md:text-start">
          You can improve your experience and potentially improve your odds of
          winning.
        </p>
      </div>

      <div className="sm:mt-20">
        <a
          href="https://kolkataff.space/tips"
          className="flex mt-5 items-center justify-center gap-2 border-2 border-siteAccentLight dark:border-siteAccentDark py-2 rounded-md md:w-[285px] lg:-mt-14 w-full mx-auto font-semibold animate-bounce"
        >
          <Image
            src={"/logo.png"}
            alt="Smart Matka Logo"
            height={40}
            width={40}
            className="w-auto h-auto"
          />{" "}
          Kolkata FF Tips
        </a>
      </div>

      {/* Repeat Patti */}

      <RepeatPatti data={repeatPatti} />

      <section>
        {/* Table Heading */}

        <h3 className="mt-5 text-center text-xl font-semibold accent-colors py-2">
          Patti Tips for [{formattedDate}]
        </h3>

        <Table className="cursor-default border-b dark:border-white">
          <TableBody>
            {data
              ? TimeArr.map((_, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-sm sm:text-lg">
                      {index + 1}
                      {index === 0
                        ? "st"
                        : index === 1
                        ? "nd"
                        : index === 2
                        ? "rd"
                        : "th"}{" "}
                      Baji Patti Tips
                    </TableCell>
                    <TableCell className="text-center font-medium w-[50%] text-base sm:text-lg">
                      {data.tips[index] ? data.tips[index].tip : "--"}
                    </TableCell>
                  </TableRow>
                ))
              : TimeArr.map((_, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-lg">
                        {index + 1}
                        {index === 0
                          ? "st"
                          : index === 1
                          ? "nd"
                          : index === 2
                          ? "rd"
                          : "th"}{" "}
                        Baji Tips
                      </TableCell>
                      <TableCell className="text-center font-medium w-[50%] text-lg">
                        --
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </section>

      <section className="mb-4">
        <div className="flex flex-col sm:hidden justify-center items-center space-y-3 mt-4">
          <Link
            href="/"
            className="font-semibold accent-colors w-full text-center py-1 rounded-md text-xl"
          >
            Smart Matka Result
          </Link>
          <Link
            href="/tips"
            className="font-semibold accent-colors w-full text-center py-1 rounded-md text-xl"
          >
            Tips
          </Link>
          <Link
            href="/lucky-number"
            className="font-semibold accent-colors w-full text-center py-1 rounded-md text-xl"
          >
            Smart Matka Lucky Number
          </Link>
          <Link
            href="/old-results"
            className="font-semibold accent-colors w-full text-center py-1 rounded-md text-xl"
          >
            All Results 2024
          </Link>
        </div>
      </section>

      <section className="my-5 px-5">
        <ol className="list-decimal space-y-2 text-lg">
          <li>
            <strong>Understand the Game Rules: </strong>Before you start playing
            Smart Matka, make sure you understand the game rules and how it
            works. Familiarize yourself with the different types of bets and
            payouts.
          </li>
          <li>
            <strong>Bet Responsibly: </strong>Set a budget for your Smart Matka
            bets and stick to it. Avoid chasing losses by betting more than you
            can afford to lose.
          </li>
          <li>
            <strong>Analyze Previous Results: </strong>Study past Smart Matka
            results and look for patterns or movements. While this won&apos;t
            guarantee a win, it can provide some insights into the game.
          </li>
          <li>
            <strong>Use Intuition and Strategy: </strong>Smart Matka involves
            guessing numbers, so trust your intuition, but also consider using
            basic strategies. Some players track hot and cold numbers or use
            other methods to make educated guesses.
          </li>
          <li>
            <strong>Diversify Bets: </strong>Rather than placing all your bets
            on a single Bazi chart, consider diversifying your bets across
            multiple charts. This can increase your chances of hitting a winning
            combination.
          </li>
          <li>
            <strong>Stay Informed: </strong>Keep yourself updated with any
            changes in the game rules or payouts. Being informed can help you
            make better betting decisions.
          </li>
          <li>
            <strong>Play Regularly: </strong>Some players believe that playing
            regularly increases their chances of winning over time. However,
            always do so within your budget.
          </li>
          <li>
            <strong>Manage Expectations: </strong>Understand that Smart Matka is
            primarily a game of luck, and there&apos;s no foolproof strategy for
            winning consistently. Treat it as entertainment rather than a
            guaranteed income source.
          </li>
          <li>
            <strong>Play for Fun: </strong>Enjoy the excitement of the game
            without putting too much pressure on winning. Remember that the odds
            are stacked against any individual player.
          </li>
          <li>
            <strong>Be Cautious of Scams: </strong>Be wary of scams or
            fraudulent schemes related to Smart Matka. Stick to trusted
            platforms and avoid offers that seem too good to be true.
          </li>
          <li>
            <strong>Respect Local Laws: </strong>Ensure that you are playing
            Smart Matka in compliance with local laws and regulations regarding
            gambling and lotteries.
          </li>
          <li>
            <strong>Avoid Consecutive Bets: </strong>Try not to place
            consecutive bets with the same numbers. Mix up your choices to keep
            things interesting and potentially increase your odds.
          </li>
        </ol>
      </section>

      <section className="w-full h-full flex items-center justify-center my-5">
        <Link
          href={"/"}
          className="py-5 accent-colors w-full text-center rounded-md text-xl md:text-2xl lg:text-3xl font-semibold hover:scale-105 duration-500"
        >
          Smart Matka
        </Link>
      </section>

      <p>
        Remember that Smart Matka should be played for entertainment purposes,
        and there are no guaranteed strategies for winning. Always gamble
        responsibly and within your means, and be prepared to accept both wins
        and losses in the game.
      </p>
    </>
  );
};

export const revalidate = 10;

export default PattiTips;
