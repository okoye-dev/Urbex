import { FC } from "react";
import FacilitiesAndMaintenance from "../Home/FacilitiesAndMaintenance";
import { Button } from "@/components/ui/button";
import GreetingCard from "@/components/GreetingCard";
import addstaff from "@/assets/add-staff.svg";
import Layout from "@/pages/Layout";
import { FacilityForm } from "@/components/FacilityForm";

interface IProps {}

const CreateFacility: FC<IProps> = () => {
  return (
    <Layout>
      <div className="py-3 px-6">
        <header className="flex sm:flex-col justify-between pb-8 items-center">
          <h1 className="font-semibold text-lg sm:pb-3">Create Facility</h1>
          <div className="flex gap-3">
            <Button>
              <img src={addstaff} alt="" className="pr-2" />
              Add Staff/User
            </Button>
            <Button variant={"white"}>Manager POV</Button>
          </div>
        </header>
        <GreetingCard />
      </div>
      <FacilitiesAndMaintenance />
      <div className="p-10 w-full flex flex-col">
        <span className="py-6 font-semibold text-2xl text-indigo-700 underline">
          Facility
        </span>{" "}
        <FacilityForm />
      </div>
    </Layout>
  );
};

export default CreateFacility;
