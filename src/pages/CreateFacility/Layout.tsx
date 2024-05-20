import { FC } from "react";
import TotalDataCard from "@/components/TotalDataCard";
import { FacilityForm } from "@/pages/CreateFacility/FacilityForm";
import { useTotalFacilitiesDataCard } from "@/hooks/useTotalDataCard";

interface IProps {}

const CreateFacility: FC<IProps> = () => {
  const data = useTotalFacilitiesDataCard();
  
  return (
    <>
      <TotalDataCard data={data} />
      <div className="p-10 w-full flex flex-col font-syne">
        <span className="py-6 font-bold text-xl text-indigo-700 underline">
          Facility
        </span>
        <FacilityForm />
      </div>
    </>
  );
};

export default CreateFacility;
