import { useNavItems } from "@/hooks/useNavItems";
import { FC, useContext, useState } from "react";
import { OpenNavContext } from "@/contexts/OpenNavContext";
import { useNavigate } from "react-router-dom";
import { AppliancesContext } from "@/contexts/AppliancesContext";
import { ActiveAppliancesContext } from "@/contexts/ActiveAppliancesContext";
import { ActiveStaffReportContext } from "@/contexts/ActiveStaffReportContext";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}: SideNavProps) => {
  const navigate = useNavigate();
  const navItems = useNavItems();
  const [activeNavItem, setActiveNavItem] = useState("");
  const { navOpen, toggleNav } = useContext(OpenNavContext);
  const { isAppliancesOpen, toggleAppliances } = useContext(AppliancesContext);
  const { openActiveAppliance } = useContext(ActiveAppliancesContext);
  const { makeStaffActive } = useContext(ActiveStaffReportContext);
  const { makeActiveReportsCard } = useContext(ReportsCardContext);
  const { isReportsCardOpen, toggleIsReportCardOpen } = useContext(
    IsReportsCardOpenContext
  );

  const resetAllSubPageStates = () => {
    isAppliancesOpen ? toggleAppliances() : null;
    isReportsCardOpen ? toggleIsReportCardOpen() : null;
    openActiveAppliance("");
    makeStaffActive("");
    makeActiveReportsCard("");
  };

  const goToPage = (item: any) => {
    resetAllSubPageStates();
    setActiveNavItem(item.title);

    const timeout = setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
      toggleNav();
      navigate(`/dashboard/${item.route}`, { state: item.title });
    }, 100);

    return () => clearTimeout(timeout);
  };

  return (
    <nav
      className={` ${
        navOpen ? "translate-x-0" : "sm:-translate-x-[16rem]"
      } transition-all duration-300 ease-in-out flex flex-col text-white bg-blue border-darkgray border-r text-nowrap top-12 fixed z-20 h-full`}
    >
      {navItems.map((item, index) => (
        <div
          onClick={() => {
            goToPage(item);
          }}
          key={index}
          className={`${
            activeNavItem == item.title && "bg-white text-black font-extrabold"
          } h-14 w-60 pl-4 flex items-center gap-3 text-xs cursor-pointer transition-colors duration-400 ease-in-out`}
        >
          <img
            src={activeNavItem == item.title ? item.iconFocus : item.icon}
            alt={item.title}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
