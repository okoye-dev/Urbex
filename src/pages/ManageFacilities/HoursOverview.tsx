import { FC } from "react";
import { useHoursOverviewData } from "./hooks/useHoursOverviewData";

interface IProps {}

const HoursOverview: FC<IProps> = () => {
  const { row1, row2 } = useHoursOverviewData();
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full p-6 lg:w-3/5">
      <section className="flex ipad:gap-2 w-full border rounded-lg">
        {row1.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-start p-4 font-semibold w-1/2 relative`}
          >
            <p className="flex items-end gap-[1px] text-2xl text-blue/90">
              {item.value}
              <span className="text-lg"> {item.timeline}</span>
            </p>
            <span className="text-[0.65rem] text-blue/50">{item.title}</span>
            <div
              className={`w-[1px] bg-blue/30 h-[80%] absolute top-[10%] right-0 ${
                index == 1 && "hidden"
              }`}
            ></div>
          </div>
        ))}
      </section>

      <section className="flex ipad:gap-2 w-full border rounded-lg">
        {row2.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start p-4 border-b font-semibold w-1/2 relative"
          >
            <p className="flex items-end gap-[1px] text-2xl text-blue/90">
              {item.value}
              <span className="text-lg"> {item.timeline}</span>
            </p>
            <span className="text-[0.65rem] text-blue/50">{item.title}</span>
            <div
              className={`w-[1px] bg-blue/30 h-[80%] absolute top-[10%] right-0 ${
                index == 1 && "hidden"
              }`}
            ></div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HoursOverview;
