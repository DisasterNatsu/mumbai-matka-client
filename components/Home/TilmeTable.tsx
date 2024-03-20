import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FaArrowRightLong } from "react-icons/fa6";

const TimeTable = () => (
  <section className="my-10">
    <h3 className="accent-colors text-center text-2xl py-2 font-bold">
      Time Table
    </h3>
    <Table className="cursor-default border-b dark:border-white">
      <TableBody>
        {/* 1st  */}
        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              1st Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            09:30 AM
          </TableCell>
        </TableRow>

        {/* 2nd */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              2nd Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            11:00 AM
          </TableCell>
        </TableRow>

        {/* 3rd */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              3rd Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            12:30 PM
          </TableCell>
        </TableRow>

        {/* 4th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              4th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            02:00 PM
          </TableCell>
        </TableRow>

        {/* 5th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              5th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            03:30 PM
          </TableCell>
        </TableRow>

        {/* 6th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              6th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            05:00 PM
          </TableCell>
        </TableRow>

        {/* 7th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              7th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            06:30 PM
          </TableCell>
        </TableRow>

        {/* 8th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              8th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            08:00 PM
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>
);

export default TimeTable;
