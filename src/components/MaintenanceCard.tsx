import { FC } from "react";

interface IMaintenanceMetrics {
  type: string;
  value: string;
  className?: string;
}

const MaintenanceCard: FC<IMaintenanceMetrics> = ({
  type,
  value,
  className,
}: IMaintenanceMetrics) => {
  return (
    <div className={`${className} bg-blue rounded-lg p-3`}>
      <p className="sm:text-xs text-[0.65rem] text-white/50 font-quicksand">{type}</p>
      <p className="text-[1.6rem] sm:text-xl pt-1 font-medium">{value}</p>
    </div>
  );
};

export default MaintenanceCard;
