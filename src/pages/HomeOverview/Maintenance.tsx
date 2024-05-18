import { FC } from "react";
import OverviewOfMaintenance from "./OverviewOfMaintenance";
import MostMaintenance from "@/pages/HomeOverview/MostMaintenance";
import MaintenanceInProgress from "@/pages/HomeOverview/MaintenanceInProgress";
import analytics from "@/assets/analytics.png";

interface IProps {}

const Maintenance: FC<IProps> = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center px-6">
      <section className="flex lg:flex-row flex-col w-full py-2 gap-4">
        <OverviewOfMaintenance />
        <MostMaintenance />
      </section>

      <section className="flex lg:flex-row flex-col md:items-center lg:items-start sm:items-center lg:gap-4 gap-1">
        <div className="overflow-hidden">
          <img
            src={analytics}
            alt="analytics"
            className="object-cover scale-[1.075]"
          />
        </div>
        <MaintenanceInProgress />
      </section>
    </div>
  );
};

export default Maintenance;
