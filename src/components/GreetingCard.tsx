import { FC, useState } from "react";

interface IProps {}

const GreetingCard: FC<IProps> = () => {
  const [name, _setName] = useState("Kimi");
  
  return (
    <div className="rounded-lg bg-white py-2 px-4">
      <h1 className="font-semibold pb-2 text-sm">
        {" "}
        Good to see you, {name} 👋
      </h1>
      <p className="text-black/50 text-xs">It’s so good to have you back</p>
    </div>
  );
};

export default GreetingCard;
