import SearchBar from "@/components/SearchBar";
import { FC, useContext, useState } from "react";
import { DataTable } from "@/components/DataTable";
import useReportsByDateTable from "./hooks/useReportsByDateTable";
import { columns } from "./ReportsColumns";
import DatePicker from "../ManageFacilities/DatePicker";
import { ReportsPopUpContext } from "@/contexts/ReportsPopUpContext";
import ReportsPopUp from "./ReportsPopUp";

interface IProps {}

const ReportsCardByDate: FC<IProps> = () => {
  const filters = ["All", "Unattended", "Attended"];
  const [activeFilter, setActiveFilter] = useState(0);
  const data = useReportsByDateTable();
  const { isReportsPopUpOpen } = useContext(ReportsPopUpContext);

  return (
    <div className="px-6 py-8">
      <section className="w-full px-6 py-4 bg-white rounded-lg flex flex-col gap-4 lg:gap-5">
        <section className="flex justify-between items-center flex-col ipad:flex-row gap-4 lg:gap-5 sm:items-start">
          <div className="flex w-fit text-sm overflow-hidden">
            {filters.map((item, index) => (
              <span
                key={index}
                onClick={() => setActiveFilter(index)}
                className={`cursor-pointer ${
                  index === 0
                    ? "rounded-l-lg"
                    : index === 1
                    ? "border-l"
                    : "rounded-r-lg"
                } ${
                  activeFilter === index
                    ? "bg-[#D1E1F9] text-blue border-blue font-medium"
                    : "border-blue/20 text-blue/70"
                } border flex px-3 py-1 transition-colors duration-300 ease-in-out`}
              >
                {item}
              </span>
            ))}
          </div>

          <div>
            <DatePicker title="" />
          </div>
        </section>

        <SearchBar />
        <DataTable data={data} columns={columns} isReports={true} />
      </section>

      {isReportsPopUpOpen && <ReportsPopUp />}
    </div>
  );
};

export default ReportsCardByDate;
