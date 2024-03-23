import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TimeArr } from "@/Constants/NumberArray";
import { getDayOfWeek } from "@/helpers/DayofTheWeek";
import { MonthFormatter } from "@/helpers/MonthFormatter";

const PreviousTable: React.FC<{ data: LatestUpdateDataType[] }> = ({
  data,
}) => {
  // Function to group data by month
  const groupDataByMonth = () => {
    const groupedData: { [key: string]: LatestUpdateDataType[] } = {};

    data.forEach((item) => {
      const monthYear = item.date.split("-").slice(1, 3).join("-");
      if (!groupedData[monthYear]) {
        groupedData[monthYear] = [];
      }
      groupedData[monthYear].push(item);
    });

    return groupedData;
  };

  const groupedData = groupDataByMonth();

  // Sort the months in descending order
  const sortedMonths = Object.keys(groupedData).sort((a: string, b: string) => {
    const [dayA, monthA, yearA] = a.split("-").map(Number);
    const [dayB, monthB, yearB] = b.split("-").map(Number);

    // Create Date objects
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    // Check if dates are valid
    const isValidDateA = !isNaN(dateA.getTime());
    const isValidDateB = !isNaN(dateB.getTime());

    if (!isValidDateA && !isValidDateB) return 0; // Both dates are invalid, treat them as equal
    if (!isValidDateA) return 1; // dateA is invalid, move it to the end
    if (!isValidDateB) return -1; // dateB is invalid, move it to the beginning

    // Compare valid dates
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section>
      <div>
        {/* Iterate over each month */}
        {sortedMonths.map((monthYear) => {
          const fomattedMonth = MonthFormatter(monthYear.split("-")[0]);

          return (
            <div key={monthYear}>
              <h2 className="text-center accent-colors text-2xl my-1 py-1 font-semibold mt-5">{`${fomattedMonth} ${
                monthYear.split("-")[1]
              }`}</h2>
              {/* Table */}
              <Table className="cursor-default border-b">
                {/* Table Header */}
                <TableHeader className="accent-colors">
                  <TableRow>
                    <TableHead className="text-white dark:text-black w-[200px] font-semibold md:font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black px-0">
                      Date
                    </TableHead>
                    {TimeArr.map((value: string, index: number) => (
                      <TableHead
                        key={index}
                        className={`text-white dark:text-black w-[200px] font-semibold text-[0.80rem] md:text-lg text-center h-8 dark:border-black text-xs ${
                          index !== TimeArr.length - 1 && "border-r-2"
                        } px-0 py-1 leading-4`}
                      >
                        {value}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                {/* Table body */}
                <TableBody>
                  {groupedData[monthYear].map(
                    (item: LatestUpdateDataType, index: number) => {
                      const day = getDayOfWeek(item.date);

                      return (
                        <TableRow key={index} className="border-b">
                          <TableCell
                            className="p-0 text-xs font-semibold text-center md:text-base md:font-bold bg-slate-300 dark:bg-slate-900 border-b"
                            id={
                              index === groupedData[monthYear].length - 11
                                ? "last-ten-days"
                                : ""
                            }
                          >
                            {day} <br className="sm:hidden" />{" "}
                            {item.date.split("-").splice(0, 2).join("/")}
                          </TableCell>
                          {TimeArr.map((_, index: number) => (
                            <TableCell
                              className="text-center dark:border-black border-x-2 p-0 py-1 font-bold"
                              key={index}
                            >
                              {item.data[index]
                                ? item.data[index].gameResultPatti
                                : "--"}
                              <hr />
                              {item.data[index]
                                ? item.data[index].gameNumber
                                : "--"}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PreviousTable;
