import DashboardIntro from "@/components/DashboardIntro";
import TotalDataCard from "@/components/TotalDataCard";
import { FC } from "react";

interface AppliancesProps {}

const Appliances: FC<AppliancesProps> = () => {
  return (
    <div>
      <TotalDataCard />
    </div>
  );
};

export default Appliances;
