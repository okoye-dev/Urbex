import PopUp from "@/components/PopUp";
import Selector from "@/components/Selector";
import { FC, useContext } from "react";
import bin from "@/assets/bin.svg";
import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { useReportsSelector } from "./hooks/useReportsSelector";
import { ReportsPopUpContext } from "@/contexts/ReportsPopUpContext";
import { ActiveStaffReportContext } from "@/contexts/ActiveStaffReportContext";

interface IProps {}

const ReportsPopUp: FC<IProps> = () => {
  const { toggleReportsPopUp } = useContext(ReportsPopUpContext);
  const { activeStaff } = useContext(ActiveStaffReportContext);
  const { options, placeholder } = useReportsSelector();

  return (
    <PopUp>
      <div className="w-full h-full justify-center items-center flex">
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center gap-5 w-4/5 md:w-1/2 lg:w-2/5 my-10">
          <section className="flex justify-between items-center w-full">
            <h1 className="font-bold text-start w-full text-2xl">
              {activeStaff}
            </h1>
            <div
              onClick={toggleReportsPopUp}
              className="w-10 flex justify-center items-center p-1 cursor-pointer"
            >
              <img src={bin} alt="delete" />
            </div>
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

          <InputField title="Faculty" placeholder="Faculty" />

          <div className="w-full border border-blue/20 rounded-lg py-2 px-4 text-sm h-28 focus-within:outline outline-[1px] outline-blue/50">
            <textarea
              className="w-full h-full focus:outline-none text-sm font-medium placeholder:text-blue/70"
              placeholder="Description"
            />
          </div>

          <span className="w-full flex gap-3">
            <Button
              className="text-sm"
              onClick={toggleReportsPopUp}
              variant={"blue"}
            >
              Update
            </Button>
            <Button
              className="text-sm"
              onClick={toggleReportsPopUp}
              variant={"lightBlue"}
            >
              Cancel
            </Button>
          </span>
        </div>
      </div>
    </PopUp>
  );
};

export default ReportsPopUp;
