import { FC } from "react";

interface IProps {}

const FacilitiesTableHeader: FC<IProps> = () => {
  const facilities = [
    "Name",
    "Date bought",
    "Scheduled Maintenance",
    "Description",
  ];

  return (
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
  );
};

export default FacilitiesTableHeader;
