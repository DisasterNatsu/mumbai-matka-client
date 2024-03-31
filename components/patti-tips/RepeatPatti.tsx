import React from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { numArr } from "@/Constants/NumberArray";

const RepeatPatti = ({ data }: { data: RepeatPattiType }) => {
  return (
    <section>
      <h2 className="mt-5 text-center text-2xl font-bold bg-siteAccentLight dark:bg-siteAccentDark text-white dark:text-black">
        Last 30 days Repeat Patti
      </h2>
      <Table className="cursor-default border-b dark:border-white">
        <TableBody>
          {data
            ? numArr.map((item: number, index: number) => {
                return (
                  <TableRow key={item}>
                    <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-2xl">
                      {item}
                    </TableCell>
                    <TableCell className="text-center font-medium w-[50%] text-lg">
                      {data.repeatPatti[index]
                        ? data.repeatPatti[index].patti
                        : "--"}
                    </TableCell>
                  </TableRow>
                );
              })
            : numArr.map((_, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-2xl">
                      {index}
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
  );
};

export default RepeatPatti;
