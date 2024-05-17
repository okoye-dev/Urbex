import { FC, useContext } from "react";
import { Button } from "@/components/ui/button";
import addstaff from "@/assets/add-staff.svg";
import GreetingCard from "./GreetingCard";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";

const DashboardIntro: FC = () => {
  const { activeNav } = useContext(ActiveNavContext);
  return (
    <div className="py-3 px-6">
      <header className="flex flex-wrap justify-between text-center items-center pb-6">
        <h1 className="font-semibold ipad:text-lg py-2">{activeNav}</h1>
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

export default DashboardIntro;
