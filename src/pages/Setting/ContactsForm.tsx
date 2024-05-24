import InputField from "@/components/InputField";
import { FC } from "react";
import Selector from "@/components/Selector";
import { useContactsSelector } from "./hooks/useContactsSelector";

interface IProps {}

const ContactsForm: FC<IProps> = () => {
  const { placeholder, options } = useContactsSelector();

  return (
    <div className="flex flex-col gap-4 my-4">
      <h1 className="flex items-center gap-2 w-full font-bold">
        Contacts <span className="w-full h-[2px] bg-blue/20 flex" />
      </h1>

      <section className="flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-6 w-full">
        <InputField
          isProfileFormField={true}
          title="Phone number"
          placeholder="Phone number"
        />

        <InputField
          isProfileFormField={true}
          title="Email"
          placeholder="Enter email"
        />

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xs text-blue/50">City</p>
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
          isProfileFormField={true}
          title="Country"
          placeholder="Enter country"
        />

        <div className="col-span-2">
          <InputField
            isProfileFormField={true}
            title="Address"
            placeholder="Enter address"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactsForm;
