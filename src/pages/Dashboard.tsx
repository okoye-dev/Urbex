import { FC } from "react";

interface IProps {}

const Dashboard: FC<IProps> = () => {
  return (
    <div className="w-full h-1/2 flex justify-center items-center text-2xl font-bold font-syne">
      Welcome to your dashboard
    </div>
  );
};

export default Dashboard;
