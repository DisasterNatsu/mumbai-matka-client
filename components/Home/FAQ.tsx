import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium">FAQ - Frequestly asked questions</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How To Play?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              If you wish to play Mumbai Matka Game, then you have to be
              physically present in India as this game is played only inside
              India. The game is operated by Mumbai Matka authorities. Betting
              or staking of something of value, with the consciousness of risk
              and hope of gain, on the outcome of a game.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 2nd question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Types of Games?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              Mumbai Matka is a form of lottery or betting game commonly played
              in Kolkata. It involves participants selecting numbers and placing
              bets on those numbers, with payouts determined by the outcome of
              draws.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 3rd question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Minimum Bid amount And winning prices?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              There are no special criteria of minimum bid for Mumbai Matka. You
              can invest as much as money you want. But in some areas, the
              minimum amount is between 5 rupees to 10 rupees, and as we all
              know the prize amount is directly depends on the invested money.
              So it is variable every time and depends on the participant&apos;s
              invested amount. The winning money always differs from player to
              player.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 4th question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            How can I claim my prize in case I win the lottery?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              You have to submit a form to the state government with the
              relevant documents. Only after that, you will receive your winning
              amount. You can also visit the official lottery agency in Kolkata
              to know more updates about it.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 5th question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Why should you use Our Website To get the Mumbai Matka Lottery
            Result?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              Our website is very easy to use. To find out the exact Mumbai
              Matka Result, the main thing you will get here is Mumbai Matka
              Result and
              <Link
                href={"/tips"}
                className="text-siteAccentLight dark:text-siteAccentDark"
              >
                Tips
              </Link>{" "}
              For Game Everyday For Totally free of Cost. Also, you can use our
              website To check fast Mumbai Matka Results with Zero Downtime.
              Most of the time you just need to visit and you will get the
              result. there is an easy solution for Online Result Checking and
              everyone can use our website. It will save you time and help you
              in finding Kolkata fatafat Results online.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
