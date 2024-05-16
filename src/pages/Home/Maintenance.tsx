import { FC } from "react";
import OverviewOfMaintenance from "../../components/OverviewOfMaintenance";
import MostMaintenance from "@/components/MostMaintenance";
import MaintenanceInProgress from "@/components/MaintenanceInProgress";
import analytics from "@/assets/analytics.png";

interface IProps {}

const Maintenance: FC<IProps> = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center sm:px-8">
      <section className="flex lg:flex-row flex-col  w-full py-2 gap-5 md:px-2 lg:px-5">
        <OverviewOfMaintenance />
        <MostMaintenance />
      </section>
      <section className="flex lg:flex-row flex-col md:items-center lg:items-start sm:items-center p-5">
        <img
          src={analytics}
          alt="analytics"
          className="lg:w-[73%] lg:max-w-[800px] lg:-translate-x-3 lg:-translate-y-9 w-screen translate-x-0 translate-y-0"
        />
        <MaintenanceInProgress />
      </section>
    </div>
  );
};

export default Maintenance;
