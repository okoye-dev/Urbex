import { FC } from "react";
import MyCalendar from "./MyCalendar";
import TotalDataCard from "@/components/TotalDataCard";
import { useTotalReportsDataCard } from "@/hooks/useTotalDataCard";
import { useNavigate } from "react-router-dom";

interface IProps {}

const Reports: FC<IProps> = () => {
  const data = useTotalReportsDataCard();
  const navigate = useNavigate();

  const goToReportsForSpecificDate = (day: string) => {
    navigate(`${day}`);
  };

  return (
    <div className="w-full">
      <TotalDataCard data={data} />
      <MyCalendar onClick={goToReportsForSpecificDate} />
    </div>
  );
};

export default Reports;
