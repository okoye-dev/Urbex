import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import { useMaintenanceScheduleSelector } from "@/hooks/useMaintenanceScheduleSelector";
import { FC } from "react";
import { useAlerts } from "./hooks/useAlerts";
import AlertCard from "./AlertCard";

interface IProps {}

const AlertAndNotifications: FC<IProps> = () => {
  const { schedulePlaceholder, scheduleOptions } =
    useMaintenanceScheduleSelector();
  const data = useAlerts();

  return (
    <div className="px-6 flex flex-col gap-3 bg-white rounded-lg mx-6 my-8 py-4">
      <section className="flex flex-col ipad:flex-row justify-between items-start ipad:items-center gap-2 ipad:gap-0">
        <SearchBar />

        <div className="flex justify-center items-center gap-2 lg:gap-5 font-semibold">
          <Selector
            placeholder={schedulePlaceholder}
            options={scheduleOptions}
          />
          <p
            className={`text-red text-sm font-semibold cursor-pointer hidden ipad:flex`}
          >
            Clear all
          </p>
        </div>
      </section>

      <div className="flex justify-between items-center">
        <h1 className="font-bold py-1"> Alert</h1>
        <p className={`text-red text-sm font-semibold cursor-pointer ipad:hidden`}>
          Clear all
        </p>
      </div>
      {data.map((item, index) => (
        <AlertCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AlertAndNotifications;
