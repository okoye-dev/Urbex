import { FC } from "react";
import viewnext from "@/assets/view-next.svg";
import {
  IList,
  useMaintenanceInProgress,
} from "@/pages/HomeOverview/hooks/useMaintenanceInProgress";

interface IProps {}

const MaintenanceInProgressCard: FC<IProps> = () => {
  const list: IList[] = useMaintenanceInProgress();

  return (
    <>
      {list.map((item, index) => (
        <span
          key={index}
          className="flex font-medium text-[0.65rem] sm:text-sm sm:pb-5"
        >
          <p className="w-1/2">{item.name}</p>
          <div className="w-1/2 flex justify-between ">
            <p>{item.due}</p>
            <img
              src={viewnext}
              alt="next"
              width={15}
              className="-translate-x-2 md:-translate-x-1"
            />
          </div>
        </span>
      ))}
    </>
  );
};

export default MaintenanceInProgressCard;
