import { FC } from "react";
import { Button } from "@/components/ui/button";
import addstaff from "@/assets/add-staff.svg";
import GreetingCard from "../../components/GreetingCard";

interface IProps {}

const HomeOverview: FC<IProps> = () => {
  return (
    <div className="py-3 px-6">
      <header className="flex sm:flex-col justify-between pb-8 items-center">
        <h1 className="font-semibold text-lg sm:pb-3">Home Overview</h1>
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
  );
};

export default HomeOverview;
