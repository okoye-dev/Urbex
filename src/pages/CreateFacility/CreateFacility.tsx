import { FC } from "react";
import FacilitiesAndMaintenance from "../HomeOverview/FacilitiesAndMaintenance";
import { FacilityForm } from "@/pages/CreateFacility/FacilityForm";

interface IProps {}

const CreateFacility: FC<IProps> = () => {
  return (
    <>
      <FacilitiesAndMaintenance />
      <div className="p-10 w-full flex flex-col">
        <span className="py-6 font-bold text-2xl text-indigo-700 underline">
          Facility
        </span>
        <FacilityForm />
      </div>
    </>
  );
};

export default CreateFacility;
