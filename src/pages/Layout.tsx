import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { FC, useState } from "react";
import { OpenNavContext } from "@/contexts/OpenNavContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <OpenNavContext.Provider value={{ navOpen, toggleNav }}>
      <Header />
      <section className="flex min-h-screen">
        <SideNav />
        <section className="sm:mt-12 w-full bg-lightgray overflow-hidden">
          {children}
        </section>
      </section>
    </OpenNavContext.Provider>
  );
};

export default Layout;
