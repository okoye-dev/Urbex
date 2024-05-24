import { useNavItems } from "@/hooks/useNavItems";
import { FC, useContext } from "react";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { OpenNavContext } from "@/contexts/OpenNavContext";
import { AppliancesContext } from "@/contexts/AppliancesContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}: SideNavProps) => {
  const navItems = useNavItems();
  const { activeNav, makeActive } = useContext(ActiveNavContext);
  const { navOpen, toggleNav } = useContext(OpenNavContext);
  const { isAppliancesOpen, toggleAppliances } = useContext(AppliancesContext);
  const { isReportsCardOpen, toggleIsReportCardOpen } = useContext(
    IsReportsCardOpenContext
  );
  const selectNavItem = () => {
    if (isAppliancesOpen) {
      toggleAppliances();
    } else if (isReportsCardOpen) {
      toggleIsReportCardOpen();
    }

    const timeout = setTimeout(() => {
      toggleNav();
    }, 100);

    return () => clearTimeout(timeout);
  };

  return (
    <nav
      className={` ${
        navOpen ? "translate-x-0" : "sm:-translate-x-[16rem]"
      } transition-transform duration-300 ease-in-out flex flex-col text-white bg-blue border-darkgray border-r text-nowrap top-12 fixed z-20 h-full`}
    >
      {navItems.map((item, index) => (
        <div
          onClick={() => {
            makeActive(item.title);
            selectNavItem();
          }}
          key={index}
          className={`${
            activeNav == item.title && "bg-white text-black font-extrabold"
          } h-14 w-60 pl-4 flex items-center gap-3 text-xs cursor-pointer transition-colors duration-400 ease-in-out`}
        >
          <img
            src={activeNav == item.title ? item.iconFocus : item.icon}
            alt={item.title}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
