import { Button } from "@/components/ui/button";
import { FC } from "react";
import profileImg from "@/assets/profile-image.svg";
import editProfileImg from "@/assets/edit-profile-img.svg";

interface IProps {}

const Setting: FC<IProps> = () => {
  return (
    <div className="w-full px-6">
      <h1 className="flex justify-start items-center text-lg font-bold gap-1 -mt-4 py-3">
        Profile Details / <p className="text-blue/70 text-base">Edit Profile</p>
      </h1>
      <section className="w-full h-full flex gap-[5%] ">
        <div className="rounded-2xl bg-white p-6 flex flex-col gap-3 w-full">
          <div className="flex justify-between text-lg font-bold">
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
        </div>
        <div className="rounded-2xl bg-white w-1/2 p-6 flex flex-col justify-center items-center gap-3 shadow-md relative">
          <img src={profileImg} alt="profile" className="w-4/5" />
          <img src={editProfileImg} alt="edit" className="absolute right-14 bottom-6 w-16" />
        </div>
      </section>
    </div>
  );
};

export default Setting;
