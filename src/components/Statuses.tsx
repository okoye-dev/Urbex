import editImg from "@/assets/edit.svg";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { useContext } from "react";

interface IProps {
  edit?: boolean;
}

export const UpToDate = ({ edit = false }: IProps) => {
  const { togglePopUp } = useContext(EditAppliancePopUpContext);
  return (
    <div className="flex justify-center items-center">
      <div className="py-1 w-20 mr-1 flex justify-center items-center text-nowrap text-xs rounded-full bg-green text-white text-center">
        Up to date
      </div>
      {edit && (
        <div
          onClick={togglePopUp}
          className="rounded-full w-6 aspect-square justify-center items-center flex hover:bg-blue/10 transition-colors duration-300 ease-in-out"
        >
          <img src={editImg} alt="edit" className="translate-x-[1px]" />
        </div>
      )}
    </div>
  );
};

export const Ongoing = ({ edit = false }: IProps) => {
  const { togglePopUp } = useContext(EditAppliancePopUpContext);
  return (
    <div className="flex justify-center items-center">
      <div className="py-1 w-20 mr-1 flex justify-center items-center text-nowrap text-xs rounded-full bg-orange text-black">
        Ongoing
      </div>
      {edit && (
        <div
          onClick={togglePopUp}
          className="rounded-full w-6 aspect-square justify-center items-center flex hover:bg-blue/10 transition-colors duration-300 ease-in-out"
        >
          <img src={editImg} alt="edit" className="translate-x-[1px]" />
        </div>
      )}
    </div>
  );
};

export const Pending = ({ edit = false }: IProps) => {
  const { togglePopUp } = useContext(EditAppliancePopUpContext);
  return (
    <div className="flex justify-center items-center">
      <div className="py-1 w-20 mr-1 flex justify-center items-center text-nowrap text-xs rounded-full bg-red text-white">
        Pending
      </div>
      {edit && (
        <div
          onClick={togglePopUp}
          className="rounded-full w-6 aspect-square justify-center items-center flex hover:bg-blue/10 transition-colors duration-300 ease-in-out"
        >
          <img src={editImg} alt="edit" className="translate-x-[1px]" />
        </div>
      )}
    </div>
  );
};

export const Unattended = () => {
  return (
    <div className="py-1 w-24 mr-1 flex justify-center items-center text-nowrap text-xs rounded-lg bg-red text-white">
      Unattended
    </div>
  );
};
export const Attended = () => {
  return (
    <div className="py-1 w-24 mr-1 flex justify-center items-center text-nowrap text-xs rounded-lg bg-green text-white">
      Attended
    </div>
  );
};
