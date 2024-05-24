import { Button } from "@/components/ui/button";
import { FC } from "react";
import ProfileDisplayCard from "./ProfileDisplayCard";
import GeneralsForm from "./GeneralsForm";
import ContactsForm from "./ContactsForm";

interface IProps {}

const Setting: FC<IProps> = () => {
  return (
    <div className="w-full px-6 pb-6">
      <h1 className="flex justify-start items-center text-lg font-bold gap-1 -mt-8 lg:-mt-6 py-3">
        Profile Details / <p className="text-blue/70 text-base">Edit Profile</p>
      </h1>

      <section className="w-full h-full flex gap-5 ipad:gap-[3%] flex-col-reverse ipad:flex-row">
        <div className="rounded-2xl bg-white p-6 flex flex-col gap-3 w-full md:w-4/5 lg:w-full">
          <div className="flex ipad:flex-col ipad:gap-2 lg:flex-row justify-between text-lg font-bold">
            Edit Profile
            <div className="flex gap-3">
              <Button
                variant={"lightBlue"}
                className="rounded-full text-blue/50"
              >
                Cancel
              </Button>
              <Button variant={"blue"} className="rounded-full">
                Save Changes
              </Button>
            </div>
          </div>

          <GeneralsForm />
          <ContactsForm />
        </div>

        <ProfileDisplayCard />
      </section>
    </div>
  );
};

export default Setting;
