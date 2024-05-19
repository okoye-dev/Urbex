import { FC } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Selector from "./Selector";

interface PageButtonsProps {
  prevPage: () => void;
  nextPage: () => void;
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
  currentPage?: number;
  numberOfPages?: number;
}

export const DataTablePageButtons: FC<PageButtonsProps> = ({
  prevPage,
  getCanPreviousPage,
  nextPage,
  getCanNextPage,
  currentPage,
  numberOfPages,
}: PageButtonsProps) => {
  const thisPage = currentPage! + 1;
  // const pages = Array(numberOfPages).fill(null);
  const options = [{ val: "10", label: "10" }];

  return (
    <div className="flex items-center justify-end space-x-2 text-sm font-medium">
      <Button
        variant="white"
        size="sm"
        onClick={prevPage}
        disabled={!getCanPreviousPage()}
        className="rounded-xl text-sm"
      >
        <IoIosArrowBack />
      </Button>
      <Button
        variant="white"
        size="sm"
        onClick={prevPage}
        disabled={!getCanPreviousPage()}
        className="rounded-xl text-sm"
      >
        Prev
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={nextPage}
        disabled={!getCanNextPage()}
        className="rounded-xl text-sm"
      >
        Next
      </Button>

      <div className="flex justify-center items-center gap-1">
        Page: <span className="rounded-xl p-2 border pr-5">{thisPage}</span>
        of <p className="text-[#0000FF]">{numberOfPages}</p>
      </div>

      <Selector
        notRoundedFully={true}
        icon={false}
        placeholder={10}
        options={options}
      />
    </div>
  );
};

export default DataTablePageButtons;
