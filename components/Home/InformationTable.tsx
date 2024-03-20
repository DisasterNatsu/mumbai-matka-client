import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const InformationTable = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-center accent-colors cursor-default py-1">
        Kolkata FF Info Chart
      </h3>
      <Table className="cursor-default border dark:border-white border-t-0">
        <TableBody>
          {/* Real name */}
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[30%] text-sm">
              Real Name
            </TableCell>
            <TableCell className="text-center w-[70%] text-sm">
              Mumbai Matka | Bombay Matka | मुंबई मटका
            </TableCell>
          </TableRow>

          {/* Known as */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Known As
            </TableCell>
            <TableCell className="text-center text-sm">
              Smart Mumbai Matka | Smart Bombay Matka | स्मार्ट मुंबई मटका
            </TableCell>
          </TableRow>

          {/* Country/Region */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Country | Region
            </TableCell>
            <TableCell className="text-center text-sm">India | Asia</TableCell>
          </TableRow>

          {/* Founded at */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Founded On
            </TableCell>
            <TableCell className="text-center text-sm">1962</TableCell>
          </TableRow>

          {/* Bid Range */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Bid Range
            </TableCell>
            <TableCell className="text-center text-sm">
              ₹10 to ₹1 Lakh
            </TableCell>
          </TableRow>

          {/* Winnings */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Winnings
            </TableCell>
            <TableCell className="text-center text-sm">Multiply by 9</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InformationTable;
