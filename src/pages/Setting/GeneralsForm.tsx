import InputField from "@/components/InputField";
import { FC, useState } from "react";
import { useGenderSelector } from "./hooks/useGenderSelector";
import Selector from "@/components/Selector";
import eye from "@/assets/eye.svg";

interface IProps {}

const GeneralsForm: FC<IProps> = () => {
  const { placeholder, options } = useGenderSelector();
  const [passwordState, setPasswordState] = useState("password");
  const toggleShowPassword = () => {
    setPasswordState((prev) => (prev === "password" ? "text" : "password"));
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex items-center gap-2 w-full font-bold">
        Generals <span className="w-full h-[2px] bg-blue/20 flex" />
      </h1>

      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-6 w-full">
        <InputField
          isProfileFormField={true}
          title="First Name"
          placeholder="First name"
        />

        <InputField
          isProfileFormField={true}
          title="Last Name"
          placeholder="Type here"
        />

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xs text-blue/50">Gender</p>
          <Selector
            isProfileFormField={true}
            blue={false}
            icon={false}
            fitContent={false}
            placeholder={placeholder}
            options={options}
          />
        </div>

        <InputField
          type={passwordState}
          isProfileFormField={true}
          title="Password"
          placeholder="Enter password"
        >
          <img onClick={toggleShowPassword} src={eye} alt="view" width={14} />
        </InputField>
      </section>
    </div>
  );
};

export default GeneralsForm;
