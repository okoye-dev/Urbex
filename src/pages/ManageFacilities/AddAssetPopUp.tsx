import PopUp from "@/components/PopUp";
import { FC } from "react";

interface IProps {}

const AddAssetPopUp: FC<IProps> = () => {
  return (
    <PopUp>
      <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center gap-3 w-4/5 md:w-1/2">
        <h1>Add Asset</h1>
      </div>
    </PopUp>
  );
};

export default AddAssetPopUp;
