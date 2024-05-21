import PopUp from "@/components/PopUp";
import Selector from "@/components/Selector";
import { FC, useContext } from "react";
import {
  useAddStaffOrUserListSelector,
  useAddStaffOrUserLoactionSelector,
  useAddStaffOrUserTownSelector,
} from "./hooks/useAddStaffOrUserSelectors";
import bin from "@/assets/bin.svg";
import { AddStaffOrUserContext } from "@/contexts/AddStaffOrUserContext";
import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";

interface IProps {}

const AddStaffOrUserPopUp: FC<IProps> = () => {
  const { toggleAddStaffPopUp } = useContext(AddStaffOrUserContext);
  const { townOptions, townPlaceholder } = useAddStaffOrUserTownSelector();
  const { locationOptions, locationPlaceholder } =
    useAddStaffOrUserLoactionSelector();
  const { listOptions, listPlaceholder } = useAddStaffOrUserListSelector();

  return (
    <PopUp>
      <div className="w-full h-full justify-center items-center flex">
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center gap-5 w-4/5 md:w-1/2 lg:w-2/5 my-10">
          <section className="flex justify-between items-center w-full">
            <h1 className="font-bold text-start w-full text-2xl">Add New Staff/User</h1>
            <div
              onClick={toggleAddStaffPopUp}
              className="w-10 flex justify-center items-center p-1 cursor-pointer"
            >
              <img src={bin} alt="delete" />
            </div>
          </section>

          <InputField title="Full Name" placeholder="Full name" />

          <section className="text-sm flex flex-col gap-2 w-full font-semibold">
            Location
            <Selector
              blue={true}
              borderLeft={true}
              notRoundedFully={true}
              fitContent={false}
              icon={false}
              options={locationOptions}
              placeholder={locationPlaceholder}
            />
          </section>

          <section className="text-sm flex flex-col gap-2 w-full font-semibold">
            Town
            <Selector
              blue={true}
              borderLeft={true}
              notRoundedFully={true}
              fitContent={false}
              icon={false}
              options={townOptions}
              placeholder={townPlaceholder}
            />
          </section>

          <section className="w-full flex flex-col lg:flex-row gap-3 lg:gap-6">
            <InputField title="Email Address" placeholder="Email address" />
            <InputField title="Phone Number" placeholder="Phone number" />
          </section>

          <section className="text-sm flex flex-col gap-2 w-full font-semibold">
            Town
            <Selector
              blue={true}
              borderLeft={true}
              notRoundedFully={true}
              fitContent={false}
              icon={false}
              options={listOptions}
              placeholder={listPlaceholder}
            />
          </section>

          <span className="w-full flex gap-3">
            <Button
              className="text-sm"
              onClick={toggleAddStaffPopUp}
              variant={"blue"}
            >
              Add
            </Button>
            <Button
              className="text-sm"
              onClick={toggleAddStaffPopUp}
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

export default AddStaffOrUserPopUp;
