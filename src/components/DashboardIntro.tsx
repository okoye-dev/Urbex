import { FC, useContext } from "react";
import { Button } from "@/components/ui/button";
import addstaff from "@/assets/add-staff.svg";
import GreetingCard from "./GreetingCard";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { ActiveAppliancesContext } from "@/contexts/ActiveAppliancesContext";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import { AddStaffOrUserContext } from "@/contexts/AddStaffOrUserContext";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";

interface DashboardIntroProps {
  isAppliances?: boolean;
}
const DashboardIntro: FC<DashboardIntroProps> = ({
  isAppliances = false,
}: DashboardIntroProps) => {
  const { activeNav, makeActive } = useContext(ActiveNavContext);
  const { activeAppliance } = useContext(ActiveAppliancesContext);
  const { toggleAddAssetPopUp } = useContext(AddAssetPopUpContext);
  const { toggleAddStaffPopUp, isAddStaffPopUp } = useContext(
    AddStaffOrUserContext
  );
  const { activeReportsCard } = useContext(ReportsCardContext);
  const { isReportsCardOpen, toggleIsReportCardOpen } = useContext(
    IsReportsCardOpenContext
  );

  const goToAddStaffOrUser = () => {
    activeNav !== "Add Staff/User" && makeActive("Add Staff/User");
    isReportsCardOpen && toggleIsReportCardOpen();
    !isAddStaffPopUp && toggleAddStaffPopUp();
  };

  return (
    <div className="py-3 px-6">
      <header className="flex flex-wrap justify-between text-center items-center pb-6">
        <div className="flex flex-col items-start justify-center tracking-tight">
          <h1
            className={`${
              isAppliances || isReportsCardOpen
                ? "text-blue/30 text-xs"
                : "ipad:text-lg py-2"
            } font-bold`}
          >
            {activeNav} {isAppliances && "/Appliances"}
          </h1>
          {isAppliances && (
            <h1 className="font-bold ipad:pb-0 pb-2">{activeAppliance}</h1>
          )}
          {isReportsCardOpen && (
            <h1 className="font-bold ipad:pb-0 pb-2">
              {activeReportsCard} Reports
            </h1>
          )}
        </div>

        <div className="flex gap-3">
          {isAppliances ? (
            <Button onClick={toggleAddAssetPopUp}>
              <img src={addstaff} alt="" className="pr-2" />
              Add Appliances
            </Button>
          ) : (
            <>
              <Button onClick={goToAddStaffOrUser}>
                <img src={addstaff} alt="" className="pr-2" />
                Add Staff/User
              </Button>
              <Button variant={"white"}>Manager POV</Button>
            </>
          )}
        </div>
      </header>

      <GreetingCard />
    </div>
  );
};

export default DashboardIntro;
