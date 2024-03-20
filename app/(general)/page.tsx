import { Axios } from "@/utils/AxiosConfig";

import CurrentDayTable from "@/components/Home/CurrentDayTable";
import { QueryDateFormatter } from "@/helpers/QueryDateFormatter";
import { DateFormatter } from "@/helpers/DateFormatter";
import TypeWriter from "@/components/Home/TypeWriter";
import LastTwoDaysTable from "@/components/Home/LastTwoDaysTable";
import Link from "next/link";
import LastTenDaysTable from "@/components/Home/LastTenDaysTable";
import TimeTable from "@/components/Home/TilmeTable";
import FAQ from "@/components/Home/FAQ";
import InformationTable from "@/components/Home/InformationTable";

const getCurrentDayData = async (date: string) => {
  const request = await Axios.get(`/get/current/${date}`);

  const response = await request.data;

  return response;
};

const getLastTwoDaysData = async (date: string) => {
  const request = await Axios.get(`/get/lastTwo/${date}`);

  const response = await request.data;

  return response;
};

const getLastTenDaysData = async (date: string) => {
  const request = await Axios.get(`/get/lastTen/${date}`);

  const response = await request.data;

  return response;
};

const Home = async () => {
  // date for query

  const date = QueryDateFormatter();

  // data from api calls
  const CurrentDayData = await getCurrentDayData(date);
  const lastTwoDaysData = await getLastTwoDaysData(date);
  const lastTenDaysData = await getLastTenDaysData(date);

  // formatter date to show heading
  const { formattedDate } = DateFormatter();

  return (
    <>
      <title>Mumbal Satta Matka</title>
      <meta property="og:url" content="https://smartmumbaimatka.in" />
      <meta
        name="description"
        content="Mumbai Matka Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips & Old Results, 220 Patti Chart, Lucky Number - কলকাতা ff"
      />
      <link rel="canonical" href="https://smartmumbaimatka.in" />
      {/* date */}
      <h1 className="my-1 text-xl font-bold text-center dark:bg-siteAccentDark bg-siteAccentLight dark:text-black text-white cursor-default dark:border-black border-white border-x-2 py-2">
        {formattedDate}
        <span className="animate-pulse duration-700">🔴</span>LIVE
      </h1>
      {/* currrent day result */}
      <CurrentDayTable data={CurrentDayData} />
      <section>
        <TypeWriter />
      </section>

      {/* result of last two days */}

      <h2 className="border-b-2 dark:border-white mb-4 text-center py-1 text-xl md:text-2xl font-bold">
        Result of Last Two Days
      </h2>
      <LastTwoDaysTable data={lastTwoDaysData} />

      {/* some text content */}

      <section className="mb-4">
        <h2 className="text-center font-bold my-3 text-2xl">
          Mumbai Smart Matka Result Today
        </h2>
        <p className="text-center text-sm">
          On this website, you will get <strong>Super Fast</strong> Mumbai Smart
          Matka Result Live Online. <br />
          We also provide{" "}
          <Link
            href={"/tips"}
            className="font-semibold dark:text-siteAccentDark text-siteAccentLight "
          >
            Tips
          </Link>
          ,{" "}
          <Link
            href="/patti-chart"
            className="font-semibold dark:text-siteAccentDark text-siteAccentLight "
          >
            Patti Chart
          </Link>
          ,{" "}
          <Link
            href="/lucky-number"
            className="font-semibold dark:text-siteAccentDark text-siteAccentLight "
          >
            Lucky Number
          </Link>{" "}
          and{" "}
          <Link
            href="/old-results"
            className="font-semibold dark:text-siteAccentDark text-siteAccentLight "
          >
            Old Result Chart
          </Link>
        </p>
      </section>

      <h2 className="border-b-2 dark:border-white mb-4 text-center py-1 text-xl md:text-2xl font-bold">
        Result of Last Ten Days
      </h2>
      <LastTenDaysTable data={lastTenDaysData} />

      <TimeTable />

      <h2 className="text-3xl font-semibold text-center">
        Important information
      </h2>
      <hr className="my-5 pb-2 dark:border-white border-black" />

      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        <div className="w-full md:w-[50%]">
          <FAQ />
        </div>
        <div className="w-full md:w-[50%]">
          {/* Information Table */}
          <InformationTable />
        </div>
      </div>
    </>
  );
};
export const revalidate = 10;

export default Home;
