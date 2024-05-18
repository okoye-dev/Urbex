import MaintenanceCard from "@/pages/HomeOverview/MaintenanceCard";
import MaintenenceCompletionStatus from "@/pages/HomeOverview/MaintenenceCompletionStatus";
import { useMaintenanceMetrics } from "@/pages/HomeOverview/hooks/useMaintenanceMetrics";
import { FC } from "react";

interface IProps {}

const OverviewOfMaintenance: FC<IProps> = () => {
  const [maintenanceMetrics, maintenanceMetricsTwo] = useMaintenanceMetrics();

  return (
    <div className="bg-darkblue w-full lg:w-[70%] rounded-lg px-3 sm:px-6 py-4 border border-red font-syne">
      <p className="font-medium text-[1.425rem] pb-4 text-white/70">
        Overview of Maintenance
      </p>
      <section className="flex gap-2 justify-center items-center">
        <div className="gap-3 flex flex-col w-[23%] sm:w-2/5">
          {maintenanceMetrics.map((item, index) => (
            <MaintenanceCard key={index} {...item} />
          ))}
        </div>
        <div className="gap-3 flex flex-col w-[32%] sm:w-3/5">
          {maintenanceMetricsTwo.map((item, index) => (
            <MaintenanceCard key={index} {...item} />
          ))}
        </div>
        <span className="flex sm:hidden">
          <MaintenenceCompletionStatus />
        </span>
      </section>
      <span className="hidden sm:flex justify-center py-3">
        <MaintenenceCompletionStatus />
      </span>
    </div>
  );
};

export default OverviewOfMaintenance;
