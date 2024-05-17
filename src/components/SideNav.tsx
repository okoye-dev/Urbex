import { useNavItems } from "@/hooks/useNavItems";
import { FC, useEffect, useContext } from "react";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { OpenNavContext } from "@/contexts/OpenNavContext";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}: SideNavProps) => {
  const navItems = useNavItems();
  const { activeNav, makeActive } = useContext(ActiveNavContext);
  const { navOpen, toggleNav } = useContext(OpenNavContext);

  const selectNavItem = () => {
    const timeout = setTimeout(() => {
      toggleNav();
    }, 100);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  return (
    <nav
      className={` ${
        navOpen ? "translate-x-0" : "sm:-translate-x-[16rem]"
      } transition-transform duration-300 ease-in-out flex flex-col text-white bg-blue border-darkgray border-r text-nowrap fixed top-12 md:static z-20 sm:h-full`}
    >
      {navItems.map((item, index) => (
        <div
          onClick={() => {
            makeActive(item.title);
            selectNavItem();
          }}
          key={index}
          className={`${
            activeNav == item.title && "bg-white text-black font-semibold"
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
