import TotalDataCard from "@/components/TotalDataCard";
import { useTotalAppliancesDataCard } from "@/hooks/useTotalDataCard";
import { FC } from "react";

interface AppliancesProps {}

const Appliances: FC<AppliancesProps> = () => {
  const totalAppliancesDataCard = useTotalAppliancesDataCard();
  return (
    <div>
      <TotalDataCard data={totalAppliancesDataCard} />
    </div>
  );
};

export default Appliances;
