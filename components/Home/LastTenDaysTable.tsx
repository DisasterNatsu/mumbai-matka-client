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

const LastTenDaysTable = ({ data }: { data: LatestUpdateDataType[] }) => {
  return (
    <section>
      <div>
        {/* table */}
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
            data.map((item: LatestUpdateDataType, index: number) => {
              const day = getDayOfWeek(item.date);

              return (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell className="px-0 text-xs font-semibold text-center md:text-base md:font-bold bg-slate-300 dark:bg-slate-900">
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

                        {item.data[index] ? item.data[index].gameNumber : "--"}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              );
            })}
        </Table>
      </div>
    </section>
  );
};

export default LastTenDaysTable;
