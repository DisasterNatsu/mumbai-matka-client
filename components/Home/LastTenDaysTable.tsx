"use client";

import { useState } from "react";
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
import { Button } from "../ui/button";

const LastTenDaysTable = ({ data }: { data: LatestUpdateDataType[] }) => {
  // number array

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  // Function to handle number selection

  const handleNumberSelect = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  // Function to determine the highlight color for a selected number

  const getHighlightColor = (number: number) => {
    const index = selectedNumbers.indexOf(number);
    const colors = [
      "hover:bg-yellow-400 bg-yellow-400 text-black hover:text-black",
      "hover:bg-blue-400 bg-blue-400 text-black hover:text-black",
      "hover:bg-green-400 bg-green-400 text-black hover:text-black",
      "hover:bg-pink-400 bg-pink-400 text-black hover:text-black",
      "hover:bg-purple-400 bg-purple-400 text-black hover:text-black",
      "hover:bg-orange-400 bg-orange-400 text-black hover:text-black",
      "hover:bg-cyan-400 bg-cyan-400 text-black hover:text-black",
      "hover:bg-indigo-400 bg-indigo-400 text-black hover:text-black",
      "hover:bg-red-400 bg-red-400 text-black hover:text-black",
      "hover:bg-teal-400 bg-teal-400 text-black hover:text-black",
    ];
    return index !== -1 ? colors[index % colors.length] : "";
  };

  // Function to determine if a cell should be highlighted

  const shouldHighlightCell = (cellNumber: number) => {
    return selectedNumbers.includes(cellNumber);
  };

  return (
    <section>
      <div>
        {/* table */}
        <Table className="cursor-default border-b">
          {/* Table Header */}
          <TableHeader className="accent-colors">
            <TableRow>
              <TableHead className="text-white border-r-2 dark:text-black w-[200px] font-semibold md:font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black px-0">
                Date
              </TableHead>
              {TimeArr.map((value: string, index: number) => (
                <TableHead
                  key={index}
                  className={`text-white dark:text-black w-[200px] font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black text-xs ${
                    index !== TimeArr.length - 1 && "border-r-2"
                  } px-0 py-1 leading-4`}
                >
                  {value}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          {/* table body */}

          {data &&
            data
              .slice()
              .reverse()
              .map((item: LatestUpdateDataType, index: number) => {
                const day = getDayOfWeek(item.date);

                // Pad the data array if it contains fewer than 8 objects
                const paddedData =
                  item.data.length < 8
                    ? [...item.data, ...Array(8 - item.data.length).fill(null)]
                    : item.data;

                // Map table cells for the current row
                const tableCells = paddedData.map((dataItem, dataIndex) => {
                  return (
                    <TableCell
                      className={`text-center border-x-2 p-0 py-1 font-bold border-b border-b-slate-300 dark:border-b-slate-500 ${
                        shouldHighlightCell(dataItem?.gameNumber) &&
                        getHighlightColor(dataItem?.gameNumber)
                      }`}
                      key={dataIndex}
                    >
                      {dataItem ? dataItem.gameResultPatti : "--"}
                      <br />
                      {dataItem && dataItem.gameNumber}
                    </TableCell>
                  );
                });

                return (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell
                        className="px-0 text-xs font-semibold text-center md:text-base md:font-bold bg-slate-300 dark:bg-slate-900 border-b"
                        id={index === data.length - 8 ? "last-ten-days" : ""}
                      >
                        {day} <br className="sm:hidden" />{" "}
                        {item.date.split("-").splice(0, 2).join("/")}
                      </TableCell>
                      {tableCells}
                    </TableRow>
                  </TableBody>
                );
              })}
        </Table>
      </div>

      <div>
        <h3 className="text-center mt-2 font-semibold py-2">
          Click the Box to highlight the numbers to compare Repeated Pattis
        </h3>

        <ul className="flex mt-2 items-center justify-center space-x-2">
          {[...Array(10)].map((_, index: number) => (
            <Button
              variant={"outline"}
              onClick={() => handleNumberSelect(index)}
              className={`px-2 md:px-3 text-base font-semibold border-stone-700 dark:border-slate-400 ${
                shouldHighlightCell(index) && getHighlightColor(index)
              }`}
              key={index + 1}
            >
              {index}
            </Button>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LastTenDaysTable;
