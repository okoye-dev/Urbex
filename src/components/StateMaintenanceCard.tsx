import { FC } from "react";
import { Progress } from "@/components/ui/progress";
import { useMaintenanceStateData } from "@/hooks/useMaintenanceStateData";

interface IProps {}

const StateMaintenanceCard: FC<IProps> = () => {
  const data = useMaintenanceStateData();

  return (
    <>
      {data.map((instance, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-[0.65rem] sm:text-xs w-[16rem] px-3 py-2 mb-1 sm:w-full"
        >
          <div className="flex gap-3 items-center">
            <span className="w-8 aspect-square rounded-full bg-black/10"></span>
            <div className="flex flex-col">
              {instance.state} <p>1,240</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:pr-4">
            <Progress
              value={instance.value}
              color={instance.color}
              className="w-12 h-[6px]"
            />
            {instance.value}%
          </div>
        </div>
      ))}
    </>
  );
};

export default StateMaintenanceCard;
