import { FC } from "react";
import "react-circular-progressbar/dist/styles.css";
import GradientCircularProgressbar from "./GradientCircularProgessbar";

interface IProps {}

const MaintenenceCompletionStatus: FC<IProps> = () => {
  const percentage = 70;

  return (
    <div className="bg-blue rounded-lg p-3 flex flex-col h-[16rem] justify-between items-center relative sm:w-full">
      <span className="flex justify-center md:gap-7 lg:gap-12 sm:justify-between lg:text-xs md:text-[0.65rem] sm:text-[0.65rem] font-medium sm:w-full">
        <p className="font-quicksand p-2 sm:px-2 sm:py-1 rounded-lg bg-white text-black text-nowrap">
          4 Bedroom Flat
        </p>
        <p className="font-quicksand p-2 sm:px-2 sm:py-1 rounded-lg bg-white text-black text-nowrap">
          2 Bedroom Duplex
        </p>
      </span>

      <GradientCircularProgressbar percentage={percentage} />

      <div className="flex justify-center items-center text-[0.5rem] gap-6">
        <span className="flex flex-col">
          <h1 className="text-xl font-bold">20</h1>
          <p className="font-quicksand text-xs">Due for maintenance</p>
        </span>
        <span className="w-[2px] h-3/5 top-[20%] bg-white/20"></span>
        <span className="flex flex-col">
          <h1 className="text-xl font-bold">25</h1>
          <p className="font-quicksand text-xs">Ongoing</p>
        </span>
      </div>
    </div>
  );
};

export default MaintenenceCompletionStatus;
