import { FC } from "react";

interface IProps {}
interface List {
  name: string;
  dateBought: string;
  scheduledMaintenance: string;
  description: string;
}

const FacilitiesTable: FC<IProps> = () => {
  const list: List = {
    name: "Tiles Cleaning",
    dateBought: "Dec 4, 2023",
    scheduledMaintenance: "Mar 23, 2024",
    description: "Lorem ipsum dolor sit.",
  };

  return (
    <>
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
    </>
  );
};

export default FacilitiesTable;
