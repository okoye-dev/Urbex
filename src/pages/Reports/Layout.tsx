import { FC } from "react";
import MyCalendar from "./MyCalendar";

interface IProps {}

const Reports: FC<IProps> = () => {
  return (
    <div className="w-full px-6 py-8">
      <MyCalendar />
    </div>
  );
};

export default Reports;
