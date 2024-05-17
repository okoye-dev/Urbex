import { FC } from "react";
import viewnext from "@/assets/view-next.svg";
import {
  IList,
  useMaintenanceInProgress,
} from "@/hooks/useMaintenanceInProgress";

interface IProps {}

const MaintenanceInProgress: FC<IProps> = () => {
  const list: IList[] = useMaintenanceInProgress();
  return (
    <div className="text-black flex flex-col font-semibold text-lg justify-center bg-white px-5 rounded-lg h-fit py-4 lg:w-[19rem] lg:-translate-x-3 lg:-translate-y-4 translate-x-0 sm:rounded-lg sm:text-xl w-full sm:my-4">
      Maintenance in Progress
      <span className="sm:pt-6 flex font-semibold text-xs border-b border-black/20 py-2 mb-2 sm:mb-5 sm:text-sm">
        <p className="w-1/2">Name</p>
        <div className="w-1/2 flex justify-between">
          <p>Due Date</p>
          <p>View</p>
        </div>
      </span>
      {list.map((item, index) => (
        <span
          key={index}
          className="flex font-normal text-[0.65rem] sm:text-sm sm:pb-5"
        >
          <p className="w-1/2">{item.name}</p>
          <div className="w-1/2 flex justify-between">
            <p>{item.due}</p>
            <img src={viewnext} alt="next" width={15} />
          </div>
        </span>
      ))}
    </div>
  );
};

export default MaintenanceInProgress;
