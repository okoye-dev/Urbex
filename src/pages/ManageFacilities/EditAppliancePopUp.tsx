import PopUp from "@/components/PopUp";
import { Button } from "@/components/ui/button";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { FC, useContext } from "react";
import bin from "@/assets/bin.svg";
import Selector from "@/components/Selector";
import { useManageFacilitiesSelector } from "@/pages/ManageFacilities/hooks/useManageFacilitiesSelector";
import DatePicker from "./DatePicker";

interface IProps {}

const EditAppliancePopUp: FC<IProps> = () => {
  const { togglePopUp } = useContext(EditAppliancePopUpContext);
  const { options, placeholder } = useManageFacilitiesSelector();
  return (
    <PopUp>
      <section className="h-full w-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center gap-5 w-4/5 md:w-1/2 lg:w-2/5">
          <header className="flex justify-between items-center text-2xl font-bold tracking-tight w-full">
            Street Light
            <div
              onClick={togglePopUp}
              className="w-10 flex justify-center items-center p-1 cursor-pointer"
            >
              <img src={bin} alt="delete" />
            </div>
          </header>

          <section className="text-sm flex flex-col gap-2 w-full font-semibold">
            Status
            <Selector
              borderLeft={true}
              notRoundedFully={true}
              fitContent={false}
              icon={false}
              options={options}
              placeholder={placeholder}
            />
          </section>

          <section className="w-full flex flex-col lg:flex-row gap-3 lg:gap-6">
            <DatePicker title="Maintenance Start" />
            <DatePicker title="Maintenance End" />
          </section>

          <div className="w-full border border-blue/20 rounded-lg py-2 px-4 text-sm h-28 focus-within:outline outline-[1px] outline-blue/50">
            <textarea
              className="w-full h-full focus:outline-none"
              placeholder="Description"
            />
          </div>

          <span className="w-full flex gap-3">
            <Button className="text-sm" onClick={togglePopUp} variant={"blue"}>
              Update
            </Button>
            <Button
              className="text-sm"
              onClick={togglePopUp}
              variant={"lightBlue"}
            >
              Cancel
            </Button>
          </span>
        </div>
      </section>
    </PopUp>
  );
};

export default EditAppliancePopUp;
