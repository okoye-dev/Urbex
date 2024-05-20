import PopUp from "@/components/PopUp";
import { FC, useContext } from "react";
import { useMaintenanceScheduleSelector } from "./hooks/useMaintenanceScheduleSelector";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import Selector from "@/components/Selector";
import { useManageFacilitiesSelector } from "./hooks/useManageFacilitiesSelector";
import DatePicker from "./DatePicker";
import { Button } from "@/components/ui/button";

interface IProps {}

const AddAssetPopUp: FC<IProps> = () => {
  const { toggleAddAssetPopUp } = useContext(AddAssetPopUpContext);
  const { scheduleOptions, schedulePlaceholder } =
    useMaintenanceScheduleSelector();
  const { options, placeholder } = useManageFacilitiesSelector();

  return (
    <PopUp>
      <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center gap-5 w-4/5 md:w-1/2 lg:w-2/5 my-10">
        <h1 className="font-bold text-start w-full text-2xl">Add Asset</h1>

        <section className="text-sm flex flex-col gap-2 w-full font-semibold">
          Status
          <div className="w-full border border-blue/20 rounded-lg py-2 px-4 text-sm focus-within:outline outline-[1px] outline-blue/50">
            <input
              className="w-full h-full focus:outline-none"
              placeholder="Name of Asset"
            />
          </div>
        </section>

        <section className="text-sm flex flex-col gap-2 w-full font-semibold">
          Maintenance Schedule
          <Selector
            blue={true}
            borderLeft={true}
            notRoundedFully={true}
            fitContent={false}
            icon={false}
            options={scheduleOptions}
            placeholder={schedulePlaceholder}
          />
        </section>

        <section className="text-sm flex flex-col gap-2 w-full font-semibold">
          Status
          <Selector
            blue={true}
            borderLeft={true}
            notRoundedFully={true}
            fitContent={false}
            icon={false}
            options={options}
            placeholder={placeholder}
          />
        </section>

        <section className="w-full flex flex-col lg:flex-row gap-3 lg:gap-6">
          <DatePicker title="Date Bought" />
          <DatePicker title="Last Maintained" />
        </section>

        <DatePicker title="Maintenance Start" />

        <div className="w-full border border-blue/20 rounded-lg py-2 px-4 text-sm h-28 focus-within:outline outline-[1px] outline-blue/50">
          <textarea
            className="w-full h-full focus:outline-none"
            placeholder="Description"
          />
        </div>

        <span className="w-full flex gap-3">
          <Button
            className="text-sm"
            onClick={toggleAddAssetPopUp}
            variant={"blue"}
          >
            Add
          </Button>
          <Button
            className="text-sm"
            onClick={toggleAddAssetPopUp}
            variant={"lightBlue"}
          >
            Cancel
          </Button>
        </span>
      </div>
    </PopUp>
  );
};

export default AddAssetPopUp;
