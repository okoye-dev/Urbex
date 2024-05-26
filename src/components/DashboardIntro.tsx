import { FC, useContext } from "react";
import { Button } from "@/components/ui/button";
import addstaff from "@/assets/add-staff.svg";
import support from "@/assets/support.svg";
import GreetingCard from "./GreetingCard";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { ActiveAppliancesContext } from "@/contexts/ActiveAppliancesContext";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import { AddStaffOrUserContext } from "@/contexts/AddStaffOrUserContext";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AppliancesContext } from "@/contexts/AppliancesContext";

interface DashboardIntroProps {
  isAppliances?: boolean;
  isHelpSection?: boolean;
  isSettingSection?: boolean;
}
const DashboardIntro: FC<DashboardIntroProps> = ({
  isAppliances = false,
  isHelpSection = false,
  isSettingSection = false,
}: DashboardIntroProps) => {
  const { activeNav, makeActive } = useContext(ActiveNavContext);
  const { activeAppliance } = useContext(ActiveAppliancesContext);
  const { toggleAddAssetPopUp } = useContext(AddAssetPopUpContext);
  const { toggleAddStaffPopUp, isAddStaffPopUp } = useContext(
    AddStaffOrUserContext
  );
  const { toggleAppliances } = useContext(AppliancesContext);
  const { activeReportsCard } = useContext(ReportsCardContext);
  const { isReportsCardOpen, toggleIsReportCardOpen } = useContext(
    IsReportsCardOpenContext
  );

  const isHelpSectionOpen = activeNav == "Help";

  const navigate = useNavigate();
  const location = useLocation();
  const goToAddStaffOrUser = () => {
    activeNav !== "Add Staff/User" && makeActive("Add Staff/User");
    navigate("/dashboard/add-staff-or-user", {
      state: {
        fromNav: activeNav,
        fromPath: location.pathname,
        to: "Add Staff/User",
      },
    });
    isReportsCardOpen && toggleIsReportCardOpen();
    !isAddStaffPopUp && toggleAddStaffPopUp();
  };

  const goToManageFacilities = () => {
    isAppliances && toggleAppliances();
    makeActive("Manage Facilities");
    navigate("/dashboard/manage-facilities");
  };

  const goToReports = () => {
    isReportsCardOpen && toggleIsReportCardOpen();
    makeActive("Reports");
    navigate("/dashboard/reports");
  };

  const goBack = () => {
    location.state?.fromNav &&
      (makeActive(location.state.fromNav), navigate(location.state.fromPath));
    location.state?.from && goToManageFacilities();
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
            {isAppliances ? (
              <div className="flex gap-1">
                <p
                  onClick={goBack}
                  className="font-bold cursor-pointer hover:text-[blue]/50 transition-all duration-300 ease-in-out"
                >
                  Manage Facilities
                </p>
                / Appliances
              </div>
            ) : (
              <div className="flex gap-1 items-center">
                {location.state?.fromNav && (
                  <IoIosArrowBack
                    onClick={goBack}
                    className={`text-blue/50 hover:text-[blue]/80 transition-all duration-300 ease-in-out`}
                  />
                )}
                <p
                  onClick={goToReports}
                  className={`${
                    isReportsCardOpen &&
                    "hover:text-[blue]/80 transition-all duration-300 ease-in-out cursor-pointer"
                  }`}
                >
                  {activeNav}
                </p>
              </div>
            )}
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
          ) : isHelpSection ? (
            <Button className="flex gap-1">
              <img src={support} alt="" className="pr-2" />
              Support
            </Button>
          ) : (
            <>
              <Button onClick={goToAddStaffOrUser}>
                <img src={addstaff} alt="add staff" className="pr-2" />
                Add Staff/User
              </Button>
              <Button variant={"white"}>Manager POV</Button>
            </>
          )}
        </div>
      </header>

      {!isHelpSectionOpen && !isSettingSection && <GreetingCard />}
    </div>
  );
};

export default DashboardIntro;
