import { FC, useContext } from "react";
import logo from "@/assets/logo.svg";
import en from "@/assets/en.svg";
import bell from "@/assets/bell.svg";
import cat from "@/assets/cat.png";
import { OpenNavContext } from "@/contexts/OpenNavContext";

interface IProps {}

const Header: FC<IProps> = () => {
  const { navOpen, toggleNav } = useContext(OpenNavContext);

  return (
    <header className="flex justify-between sm:justify-end bg-blue h-12 py-2 px-3 static sm:fixed sm:left-0 sm:w-full z-50">
      <img onClick={toggleNav} src={logo} alt="" className="sm:left-3 sm:absolute" />
      <div className="flex justify-center items-center gap-5 px-8">
        <div className="flex items-center gap-2">
          <img src={en} alt="" />
          <p className="text-white">EN</p>
        </div>
        <img src={bell} alt="" />
        <img src={cat} alt="" className="h-6 aspect-square" />
      </div>
    </header>
  );
};

export default Header;
