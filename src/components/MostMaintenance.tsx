import { FC } from "react";
import dots from "@/assets/dots.svg";
import StateMaintenanceCard from "./StateMaintenanceCard";

interface IProps {}

const MostMaintenance: FC<IProps> = () => {
  return (
    <div className="flex flex-col rounded-lg font-semibold text-black bg-white py-3 px-6">
      <h1 className="flex justify-between items-center">
        Most Maintenance
        <img src={dots} alt="options" className="cursor-pointer" />
      </h1>
      <p className="text-[0.7rem] sm:text-sm text-black/50 font-normal">Based on State</p>
      <StateMaintenanceCard />
    </div>
  );
};

export default MostMaintenance;
