import { FC, useContext, useState } from "react";
import MyCalendar from "./MyCalendar";
import TotalDataCard from "@/components/TotalDataCard";
import { useTotalReportsDataCard } from "@/hooks/useTotalDataCard";
import ReportsCardByDate from "./ReportsCardByDate";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { IsReportsCardOpenContext } from "@/contexts/IsReportsCardOpenContext";
import { ReportsPopUpContext } from "@/contexts/ReportsPopUpContext";
import { ActiveStaffReportContext } from "@/contexts/ActiveStaffReportContext";

interface IProps {}

const Reports: FC<IProps> = () => {
  const data = useTotalReportsDataCard();
  const { isReportsCardOpen } = useContext(IsReportsCardOpenContext);
  const { makeActiveReportsCard } = useContext(ReportsCardContext);
  const [isReportsPopUpOpen, setIsReportsPopUpOpen] = useState(false);
  const toggleReportsPopUp = () => {
    setIsReportsPopUpOpen(!isReportsPopUpOpen);
  };
  const [activeStaff, setActiveStaff] = useState("");
  const makeStaffActive = (staff: string) => {
    setActiveStaff(staff);
  };
  return (
    <div className="w-full">
      {isReportsCardOpen ? (
        <ReportsPopUpContext.Provider
          value={{ isReportsPopUpOpen, toggleReportsPopUp }}
        >
          <ActiveStaffReportContext.Provider
            value={{ activeStaff, makeStaffActive }}
          >
            <ReportsCardByDate />
          </ActiveStaffReportContext.Provider>
        </ReportsPopUpContext.Provider>
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
