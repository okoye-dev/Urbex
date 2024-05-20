import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { FC, ReactNode, useContext } from "react";

interface PopupProps {
  children?: ReactNode;
}

const PopUp: FC<PopupProps> = ({ children }: PopupProps) => {
  const { isPopUp } = useContext(EditAppliancePopUpContext);
  const { isAddAssetPopUp } = useContext(AddAssetPopUpContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-blue/20 backdrop-blur-sm justify-center items-center z-30 ${
        isPopUp ? "flex" : isAddAssetPopUp ? "flex" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default PopUp;
