import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { FC, useState } from "react";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { OpenNavContext } from "@/contexts/OpenNavContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [activeNav, setActiveNav] = useState("");
  const makeActive = (title: string) => {
    setActiveNav(title);
  };
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <ActiveNavContext.Provider value={{ activeNav, makeActive }}>
      <OpenNavContext.Provider value={{ navOpen, toggleNav }}>
        <Header />
        <section className="flex min-h-screen">
          <SideNav />
          <section className="sm:mt-12 w-full bg-lightgray overflow-hidden">
            {children}
          </section>
        </section>
      </OpenNavContext.Provider>
    </ActiveNavContext.Provider>
  );
};

export default Layout;
