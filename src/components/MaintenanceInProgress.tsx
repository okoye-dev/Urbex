import MaintenanceInProgressCard from "@/pages/HomeOverview/MaintenanceInProgressCard";
import { FC } from "react";

interface IProps {}

const MaintenanceInProgress: FC<IProps> = () => {
  return (
    <div className="text-black flex flex-col font-bold text-lg justify-center bg-white px-5 rounded-lg h-full py-4 sm:rounded-lg sm:text-xl w-full lg:translate-y-2">
      Maintenance in Progress
      <span className="sm:pt-6 flex font-bold text-xs border-b border-black/20 py-2 mb-2 sm:mb-5 sm:text-sm">
        <p className="w-1/2">Name</p>
        <div className="w-1/2 flex justify-between">
          <p>Due Date</p>
          <p>View</p>
        </div>
      </span>
      <MaintenanceInProgressCard />
    </div>
  );
};

export default MaintenanceInProgress;
