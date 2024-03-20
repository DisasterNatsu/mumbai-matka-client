import LastTwoDaysTable from "@/components/Home/LastTwoDaysTable";
import SocialButton from "@/components/shared/SocialButtons";
import { QueryDateFormatter } from "@/helpers/QueryDateFormatter";
import { Axios } from "@/utils/AxiosConfig";
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
      <title>Mumbai Matka | Old Results</title>
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
        <div className="mx-auto mb-5">
          <SocialButton home />
        </div>
      </section>
      <LastTwoDaysTable data={oldData} />
    </>
  );
};

export const revalidate = 3600;

export default OldResults;
