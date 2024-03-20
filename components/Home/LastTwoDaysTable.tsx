import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TimeArr } from "@/Constants/NumberArray";

const LastTwoDaysTable = ({ data }: { data: LatestUpdateDataType[] }) => {
  return (
    <section>
      {data &&
        data.map((item: LatestUpdateDataType, index: number) => (
          <div key={index}>
            {/* heading */}
            <h5 className="text-center font-bold py-1 accent-colors md:text-lg my-1">
              {item.date}
            </h5>

            {/* table */}
            <Table className="cursor-default border-b">
              {/* Table Header */}
              <TableHeader className="accent-colors">
                <TableRow>
                  {TimeArr.map((value: string, index: number) => (
                    <TableHead
                      key={index}
                      className={`text-white dark:text-black w-[200px] font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black ${
                        index !== TimeArr.length - 1 && "border-r-2"
                      } px-0 py-1 leading-4`}
                    >
                      {value}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              {/* table body */}

              <TableBody>
                <TableRow>
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
            </Table>
          </div>
        ))}
    </section>
  );
};

export default LastTwoDaysTable;
