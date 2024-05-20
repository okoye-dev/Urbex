import { FC, useContext } from "react";
import logo from "@/assets/logo.svg";
import en from "@/assets/en.svg";
import bell from "@/assets/bell.svg";
import cat from "@/assets/cat.png";
import { OpenNavContext } from "@/contexts/OpenNavContext";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface IProps {}

const Header: FC<IProps> = () => {
  const { navOpen, toggleNav } = useContext(OpenNavContext);
  const navigate = useNavigate();

  return (
    <header className="flex justify-between sm:justify-end bg-blue h-12 py-2 px-3 static sm:fixed sm:left-0 sm:w-full z-50 shadow-lg">
      <IoIosMenu
        onClick={toggleNav}
        className={`${
          navOpen && "opacity-0"
        } md:hidden transition-opacity duration-300 ease-in-out sm:left-0 sm:absolute h-8 w-12`}
        color="white"
      />
      <IoMdClose
        onClick={toggleNav}
        className={`${
          !navOpen && "opacity-0"
        } md:hidden transition-opacity duration-300 ease-in-out sm:left-0 sm:absolute h-8 w-12`}
        color="white"
      />
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        alt=""
        className="sm:left-12 sm:absolute"
      />
      <div className="flex justify-center items-center gap-4 ipad:gap-6 px-2">
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
