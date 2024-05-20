import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { FC, useState } from "react";
import { OpenNavContext } from "@/contexts/OpenNavContext";
import DashboardIntro from "@/components/DashboardIntro";
import { AppliancesContext } from "@/contexts/AppliancesContext";
import { ActiveAppliancesContext } from "@/contexts/ActiveAppliancesContext";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
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

  return (
    <OpenNavContext.Provider value={{ navOpen, toggleNav }}>
      <AppliancesContext.Provider
        value={{
          isAppliancesOpen,
          toggleAppliances,
        }}
      >
        <ActiveAppliancesContext.Provider
          value={{ activeAppliance, openActiveAppliance }}
        >
          <AddAssetPopUpContext.Provider
            value={{ isAddAssetPopUp, toggleAddAssetPopUp }}
          >
            <div className="font-quicksand">
              <Header />
              <section className="flex min-h-screen">
                <SideNav />
                <section className="sm:mt-12 w-full bg-lightgray overflow-hidden">
                  <DashboardIntro isAppliances={isAppliancesOpen} />
                  {children}
                </section>
              </section>
            </div>
          </AddAssetPopUpContext.Provider>
        </ActiveAppliancesContext.Provider>
      </AppliancesContext.Provider>
    </OpenNavContext.Provider>
  );
};

export default Layout;
