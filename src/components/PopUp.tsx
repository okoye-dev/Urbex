import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import { AddStaffOrUserContext } from "@/contexts/AddStaffOrUserContext";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { ReportsPopUpContext } from "@/contexts/ReportsPopUpContext";
import { FC, ReactNode, useContext } from "react";

interface PopupProps {
  children?: ReactNode;
}

const PopUp: FC<PopupProps> = ({ children }: PopupProps) => {
  const { isPopUp } = useContext(EditAppliancePopUpContext);
  const { isAddAssetPopUp } = useContext(AddAssetPopUpContext);
  const { isAddStaffPopUp } = useContext(AddStaffOrUserContext);
  const { isReportsPopUpOpen } = useContext(ReportsPopUpContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-blue/20 backdrop-blur-sm justify-center items-start z-50 overflow-y-scroll ${
        isPopUp || isAddAssetPopUp || isAddStaffPopUp || isReportsPopUpOpen
          ? "flex"
          : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default PopUp;
