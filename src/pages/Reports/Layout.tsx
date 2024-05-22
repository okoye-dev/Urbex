import { FC, useContext } from "react";
import MyCalendar from "./MyCalendar";
import TotalDataCard from "@/components/TotalDataCard";
import { useTotalReportsDataCard } from "@/hooks/useTotalDataCard";
import ReportsCardByDate from "./ReportsCardByDate";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";

interface IProps {}

const Reports: FC<IProps> = () => {
  const data = useTotalReportsDataCard();
  const { isReportsCardOpen } = useContext(
    IsReportsCardOpenContext
  );
  const { makeActiveReportsCard } = useContext(ReportsCardContext);

  return (
    <div className="w-full">
      {isReportsCardOpen ? (
        <ReportsCardByDate />
      ) : (
        <>
          <TotalDataCard data={data} />
          <MyCalendar onClick={makeActiveReportsCard} />
        </>
      )}
    </div>
  );
};

export default Reports;
