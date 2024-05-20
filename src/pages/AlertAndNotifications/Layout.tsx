import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import { useMaintenanceScheduleSelector } from "@/hooks/useMaintenanceScheduleSelector";
import { FC } from "react";

interface IProps {}

const AlertAndNotifications: FC<IProps> = () => {
  const { schedulePlaceholder, scheduleOptions } =
    useMaintenanceScheduleSelector();

  return (
    <div className="px-6 flex flex-col gap-3 bg-white rounded-lg mx-6 my-8 py-4">
      <section className="flex justify-between items-center">
        <SearchBar />
        <div className="flex justify-center items-center gap-5">
          <Selector
            placeholder={schedulePlaceholder}
            options={scheduleOptions}
          />
          <p className="text-red text-sm font-semibold cursor-pointer">Clear all</p>
        </div>
      </section>
      <h1 className="font-bold py-1"> Alert</h1>
    </div>
  );
};

export default AlertAndNotifications;
