import { FC } from "react";
import { useProfileDetails } from "./hooks/useProfileDetails";
import profileImg from "@/assets/profile-image.svg";
import editProfileImg from "@/assets/edit-profile-img.svg";
import email from "@/assets/email.svg";
import phone from "@/assets/phone.svg";
import location from "@/assets/location.svg";
import notifications from "@/assets/notifications.svg";
import language from "@/assets/language.svg";
import passwordAndSecurity from "@/assets/password-and-security.svg";
import privacyPolicy from "@/assets/privacy-policy.svg";
import stats from "@/assets/stats.svg";

interface IProps {}

const ProfileDisplayCard: FC<IProps> = () => {
  const profile = useProfileDetails();

  return (
    <div className="rounded-2xl bg-white w-full ipad:w-2/3 lg:w-2/5 p-4 flex ipad:flex-col justify-center items-center ipad:items-center gap-[8%] ipad:gap-6 shadow-md relative font-semibold">
      <section className="flex flex-col justify-center items-center gap-3 ipad:gap-2">
        <div className="relative py-4">
          <img
            src={profileImg}
            alt="profile"
            className="w-[120px] ipad:w-[150px]"
          />
          <img
            src={editProfileImg}
            alt="edit"
            className="absolute right-2 bottom-2 ipad:bottom-3 w-[30px] ipad:w-[35px]"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center font-bold gap-2 text-sm ipad:text-lg">
          {profile.name}
          <p className="font-semibold text-blue/70 text-[0.65rem] ipad:text-xs">
            {profile.occupation}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3 ipad:gap-6 w-4/5 ipad:w-full">
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex gap-2">
            <img src={email} alt="email" width={14} />
            <p>{profile?.email}</p>
          </div>

          <div className="flex gap-2">
            <img src={phone} alt="phone" width={14} />
            <p>{profile?.phone}</p>
          </div>

          <div className="flex gap-2">
            <img src={location} alt="location" width={14} />
            <p>{profile?.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs bg-blue/10 rounded-lg p-3 w-full">
          <div className="flex gap-2">
            <img src={notifications} alt="Notifications" width={14} />
            <span className="flex justify-between w-full">
              Notifications{" "}
              <p className="text-blue/70">
                {profile.isNotificationsOn ? "ON" : "OFF"}
              </p>
            </span>
          </div>

          <div className="flex gap-2">
            <img src={language} alt="Language" width={14} />
            <span className="flex justify-between w-full">
              Language <p className="text-blue/70">{profile.language}</p>
            </span>
          </div>

          <div className="flex gap-2">
            <img
              src={passwordAndSecurity}
              alt="Password & Security"
              width={14}
            />
            <span>Password & Security</span>
          </div>

          <div className="flex gap-2">
            <img src={privacyPolicy} alt="Privacy Policy" width={14} />
            <span>Privacy Policy</span>
          </div>

          <div className="flex gap-2">
            <img src={stats} alt="Stats" width={14} />
            <span>Stats</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDisplayCard;
