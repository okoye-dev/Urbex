import { FC } from "react";

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  placeholder: string;
  isProfileFormField?: boolean;
  type?: string;
  children?: React.ReactNode;
}

const InputField: FC<IProps> = ({
  onChange,
  title,
  placeholder = "Enter here",
  isProfileFormField = false,
  type = "text",
  children,
}: IProps) => {
  return (
    <section
      className={` ${
        isProfileFormField ? "text-blue/50 text-xs" : "text-blue"
      } text-sm flex flex-col gap-2 w-full font-semibold`}
    >
      {title}
      <div
        className={`${
          isProfileFormField
            ? "rounded-lg py-0 bg-blue/[7%] px-0 border-none text-xs"
            : "rounded-lg py-2"
        } w-full border border-blue/20 px-4focus-within:outline outline-[1px] outline-blue/50 text-sm relative`}
      >
        <input
          type={type}
          onChange={onChange}
          className={`w-full h-full focus:outline-none placeholder:text-blue/70 ${
            isProfileFormField
              ? "font-bold text-black py-[6px] placeholder:pl-4 rounded-lg bg-blue/5"
              : "px-4"
          }`}
          placeholder={placeholder}
        />
        <div className="absolute right-3 top-2">{children}</div>
      </div>
    </section>
  );
};

export default InputField;
