import { FC } from "react";

interface IProps {
  title: string;
  placeholder: string;
}

const InputField: FC<IProps> = ({
  title,
  placeholder = "Enter here",
}: IProps) => {
  return (
    <section className="text-sm flex flex-col gap-2 w-full font-semibold">
      {title}
      <div className="w-full border border-blue/20 rounded-lg py-2 px-4 focus-within:outline outline-[1px] outline-blue/50 text-sm text-blue">
        <input
          className="w-full h-full focus:outline-none placeholder:text-blue/70"
          placeholder={placeholder}
        />
      </div>
    </section>
  );
};

export default InputField;