import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { FC, useEffect, useState } from "react";
import { OpenNavContext } from "@/contexts/OpenNavContext";
import DashboardIntro from "@/components/DashboardIntro";
import { AppliancesContext } from "@/contexts/AppliancesContext";
import { ActiveAppliancesContext } from "@/contexts/ActiveAppliancesContext";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import { AddStaffOrUserContext } from "@/contexts/AddStaffOrUserContext";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { useNavigate } from "react-router-dom";
import { ReportsPopUpContext } from "@/contexts/ReportsPopUpContext";
import { ActiveStaffReportContext } from "@/contexts/ActiveStaffReportContext";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const [activeNav, setActiveNav] = useState("");
  const isHelpSectionOpen = activeNav == "Help";
  const isSettingSectionOpen = activeNav == "Setting";

  const [isAppliancesOpen, setIsAppliancesOpen] = useState(false);
  const toggleAppliances = () => {
    setIsAppliancesOpen(!isAppliancesOpen);
  };
  const [activeAppliance, setActiveAppliance] = useState("");
  const openActiveAppliance = (instance: string) => {
    setActiveAppliance(instance);
  };
  const [isAddAssetPopUp, setIsAddAssetPopUp] = useState(false);
  const toggleAddAssetPopUp = () => {
    setIsAddAssetPopUp(!isAddAssetPopUp);
  };
  const [isAddStaffPopUp, setIsAddStaffPopUp] = useState(false);
  const toggleAddStaffPopUp = () => {
    setIsAddStaffPopUp(!isAddStaffPopUp);
  };
  const [activeReportsCard, setActiveReportsCard] = useState("");
  const makeActiveReportsCard = (instance: string) => {
    setActiveReportsCard(instance);
  };
  const [isReportsCardOpen, setIsReportsCard] = useState(false);
  const toggleIsReportCardOpen = () => {
    setIsReportsCard(!isReportsCardOpen);
  };
  const makeActive = (navItem: string) => {
    setActiveNav(navItem);
  };
  const [isPopUp, setIsPopUp] = useState(false);
  const togglePopUp = () => {
    setIsPopUp(!isPopUp);
  };
  const [isReportsPopUpOpen, setIsReportsPopUpOpen] = useState(false);
  const toggleReportsPopUp = () => {
    setIsReportsPopUpOpen(!isReportsPopUpOpen);
  };
  const [activeStaff, setActiveStaff] = useState("");
  const makeStaffActive = (staff: string) => {
    setActiveStaff(staff);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeNav) {
      makeActive("Home Overview");
      navigate("/", { replace: true });
    }
  });

  return (
    <OpenNavContext.Provider value={{ navOpen, toggleNav }}>
      <ActiveNavContext.Provider value={{ activeNav, makeActive }}>
        <AppliancesContext.Provider
          value={{
            isAppliancesOpen,
            toggleAppliances,
          }}
        >
          <ActiveAppliancesContext.Provider
            value={{ activeAppliance, openActiveAppliance }}
          >
            <AppliancesContext.Provider
              value={{ isAppliancesOpen, toggleAppliances }}
            >
              <EditAppliancePopUpContext.Provider
                value={{ isPopUp, togglePopUp }}
              >
                <AddAssetPopUpContext.Provider
                  value={{ isAddAssetPopUp, toggleAddAssetPopUp }}
                >
                  <AddStaffOrUserContext.Provider
                    value={{ isAddStaffPopUp, toggleAddStaffPopUp }}
                  >
                    <ReportsCardContext.Provider
                      value={{ activeReportsCard, makeActiveReportsCard }}
                    >
                      <IsReportsCardOpenContext.Provider
                        value={{ isReportsCardOpen, toggleIsReportCardOpen }}
                      >
                        <ReportsPopUpContext.Provider
                          value={{ isReportsPopUpOpen, toggleReportsPopUp }}
                        >
                          <ActiveStaffReportContext.Provider
                            value={{ activeStaff, makeStaffActive }}
                          >
                            <div className="font-quicksand">
                              <Header />
                              <section className="flex min-h-screen">
                                <SideNav />
                                <section className="mt-12 md:pl-60 w-full bg-lightgray overflow-hidden">
                                  <DashboardIntro
                                    isAppliances={isAppliancesOpen}
                                    isHelpSection={isHelpSectionOpen}
                                    isSettingSection={isSettingSectionOpen}
                                  />
                                  {children}
                                </section>
                              </section>
                            </div>
                          </ActiveStaffReportContext.Provider>
                        </ReportsPopUpContext.Provider>
                      </IsReportsCardOpenContext.Provider>
                    </ReportsCardContext.Provider>
                  </AddStaffOrUserContext.Provider>
                </AddAssetPopUpContext.Provider>
              </EditAppliancePopUpContext.Provider>
            </AppliancesContext.Provider>
          </ActiveAppliancesContext.Provider>
        </AppliancesContext.Provider>
      </ActiveNavContext.Provider>
    </OpenNavContext.Provider>
  );
};

export default Layout;
