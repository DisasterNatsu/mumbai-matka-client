"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TimeArr, IndexArr } from "@/Constants/NumberArray";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CurrentDayTable = ({ data }: { data?: LatestUpdateDataType }) => {
  const Router = useRouter();

  const handleRefresh = () => {
    return Router.refresh();
  };

  return (
    <section>
      <Table className="cursor-default">
        <TableHeader className="dark:bg-siteAccentDark bg-siteAccentLight border-x border-siteAccentLight dark:border-siteAccentDark">
          <TableRow>
            {TimeArr.map((item: string, index: number) => (
              <TableHead
                className="w-[200px] text-white dark:text-black font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black border-x-2 px-0 py-1 leading-4"
                key={index}
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {data
              ? IndexArr.map((_, index) => {
                  return (
                    <TableCell
                      className="text-center font-bold text-black dark:text-white dark:border-black border-x-2 p-0 py-1"
                      key={index}
                    >
                      {data.data[index] ? (
                        <>
                          <p className="text-sm py-2">
                            {data.data[index].gameResultPatti}
                          </p>
                          <hr />
                          <p className="text-sm py-2">
                            {data.data[index].gameNumber}
                          </p>
                        </>
                      ) : (
                        <>
                          {data.data.length === index && index !== 8 ? (
                            <Link
                              href={"/tips"}
                              className="hover:text-siteAccentLight dark:hover:text-siteAccentDark"
                            >
                              Tips
                            </Link>
                          ) : (
                            <p>--</p>
                          )}
                        </>
                      )}
                    </TableCell>
                  );
                })
              : IndexArr.map((_, index) => (
                  <TableCell
                    className="text-center dark:border-black border-x-2 p-0"
                    key={index}
                  >
                    <p>--</p>
                    <hr />
                    <p>--</p>
                  </TableCell>
                ))}
          </TableRow>
        </TableBody>
      </Table>

      <p className="text-center py-2 bg-siteAccentLight dark:bg-siteAccentDark dark:text-black text-white font-semibold text-base leading-5">
        Free main Tips paane kaliea humare{" "}
        <a
          href="https://chat.whatsapp.com/FNCjV4r9hpf6aZ3ncTEM4W"
          target="_blank"
          className="dark:text-slate-700 text-slate-300 dark:hover:text-white hover:text-slate-100"
        >
          WhatsApp
        </a>{" "}
        group join kare.
      </p>

      <div className="flex justify-center items-center gap-3 mt-3">
        <Button
          variant={"secondary"}
          className="text-lg lg:hidden"
          onClick={() => Router.push("/tips")}
        >
          Tips
        </Button>
        <button
          className="py-2 px-3 bg-siteAccentLight dark:bg-siteAccentDark rounded-md dark:hover:bg-siteAccentDark/70 hover:bg-siteAccentLight/70 text-white dark:text-black font-semibold"
          onClick={handleRefresh}
        >
          Refresh
        </button>
        <Button
          variant={"secondary"}
          className="text-lg lg:hidden"
          onClick={() => Router.push("/patti-tips")}
        >
          Patti Tips
        </Button>
      </div>
    </section>
  );
};

export default CurrentDayTable;
