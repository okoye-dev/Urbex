import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import newestLeft from "@/assets/newest-left.svg";

interface IProps {}
interface List {
  name: string;
  dateBought: string;
  scheduledMaintenance: string;
  description: string;
}

const Facilities: FC<IProps> = () => {
  const facilities = [
    "Name",
    "Date bought",
    "Scheduled Maintenance",
    "Description",
  ];

  const list: List = {
    name: "Tiles Cleaning",
    dateBought: "Dec 4, 2023",
    scheduledMaintenance: "Mar 23, 2024",
    description: "Lorem ipsum dolor sit.",
  };

  return (
    <div className="px-6">
      <span className="flex flex-col bg-white rounded-lg px-8 py-4 gap-4 ------mb-4 lg:-translate-y-9 my-4 md:my-6 lg:my-0">
        <header className="flex justify-between items-center">
          <p className="font-bold text-lg">Facilities</p>
          <Select>
            <SelectTrigger className="w-[140px] rounded-full border-2 border-[#B3B3FF]">
              <img src={newestLeft} alt="" className="px-1" />
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent className="font-quicksand">
              <SelectItem value="light">Newest</SelectItem>
              <SelectItem value="dark">Oldest</SelectItem>
              <SelectItem value="system">History</SelectItem>
            </SelectContent>
          </Select>
        </header>

        <div className="flex w-full text-xs bg-lightgray h-10 sm:text-[0.65rem] sm:font-bold font-medium">
          {facilities.map((item, index) => (
            <p
              key={index}
              className={`w-1/4 ${
                index !== 3 && "border-r border-black/20"
              } h-10 items-center flex pl-4 sm:pl-2 sm:text-[0.5rem] sm:leading-[8px] leading-3 sm:font-bold`}
            >
              {item}
            </p>
          ))}
        </div>

        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center w-full text-xs sm:text-[0.65rem] sm:h-8 h-6"
            >
              <p className="w-1/4 items-center flex pl-4 font-bold">
                {list.name}
              </p>
              <p className="w-1/4 pl-4">{list.dateBought}</p>
              <p className="w-1/4 pl-4">{list.scheduledMaintenance}</p>
              <p className="w-1/4 pl-4 truncate">{list.description}</p>
            </div>
          ))}
      </span>
    </div>
  );
};

export default Facilities;
