import { PopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { FC, ReactNode, useContext } from "react";

interface PopupProps {
  children?: ReactNode;
}

const PopUp: FC<PopupProps> = ({ children }: PopupProps) => {
  const { isPopUp } = useContext(PopUpContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-blue/20 backdrop-blur-sm justify-center items-center z-30 ${
        isPopUp ? "flex" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default PopUp;
