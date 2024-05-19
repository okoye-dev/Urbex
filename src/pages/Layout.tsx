import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { FC, useState } from "react";
import { OpenNavContext } from "@/contexts/OpenNavContext";
import DashboardIntro from "@/components/DashboardIntro";
import { AppliancesContext } from "@/contexts/AppliancesContext";

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

  return (
    <OpenNavContext.Provider value={{ navOpen, toggleNav }}>
      <AppliancesContext.Provider
        value={{
          isAppliancesOpen,
          toggleAppliances,
        }}
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
      </AppliancesContext.Provider>
    </OpenNavContext.Provider>
  );
};

export default Layout;
