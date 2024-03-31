import PreviousTable from "@/components/old-results/PreviousTable";
import SocialButton from "@/components/shared/SocialButtons";
import { QueryDateFormatter } from "@/helpers/QueryDateFormatter";
import { Axios } from "@/utils/AxiosConfig";
import Image from "next/image";
import React from "react";

const OldResults = async () => {
  // get data

  const getOldData = async (date: string) => {
    const request = await Axios.get(`/get/previous/${date}`);

    const response = await request.data;

    return response;
  };

  const date = QueryDateFormatter();

  const oldData = await getOldData(date);

  return (
    <>
      <title>Smart Matka | Old Results</title>
      <meta
        property="og:url"
        content="https://smartmumbaimatka.in/old-rresults"
      />
      <meta
        name="description"
        content="Smart Matka old results. Get all old Results for Mumbai Matka, Smart Mumbai Matka, Smart Matka here"
      />
      <section className="w-full flex justify-center my-5 flex-col">
        <div>
          <h1 className="text-center mt-4 text-3xl font-bold">
            All Previous Results
          </h1>
          <p className="text-center md:text-md text-xs pb-3 w-full border-b mb-4">
            Here you can find all the previous results available for Mumbai
            Matka
          </p>
        </div>
        <div className="mx-auto w-full mb-5">
          <SocialButton />
        </div>
        <a
          href="https://kolkataff.space/"
          className="flex items-center justify-center gap-2 border-2 border-siteAccentLight dark:border-siteAccentDark py-2 rounded-md md:w-[285px] lg:-mt-14 w-full mx-auto font-semibold animate-bounce"
        >
          <Image
            src={"/logo.png"}
            alt="Smart Matka Logo"
            height={40}
            width={40}
            className="w-auto h-auto"
          />{" "}
          Kolkata FF Results
        </a>
      </section>
      <PreviousTable data={oldData} />
    </>
  );
};

export const revalidate = 3600;

export default OldResults;
