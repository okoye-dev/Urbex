import { FC } from "react";
import { usePieChartData } from "./hooks/usePieChartData";
import { PieChart } from "react-minimal-pie-chart";
import HoursOverview from "./HoursOverview";

interface IProps {}

const PieChartAndHours: FC<IProps> = () => {
  const data = usePieChartData();
  return (
    <div className="flex flex-col lg:flex-row bg-white mx-6 rounded-lg px-4 items-center justify-center gap-[10%] py-6">
      <section className="h-40 p-4 flex gap-6 items-center lg:w-2/5 w-full">
        <PieChart data={data} lineWidth={30} paddingAngle={2} />
        <div className="w-full flex flex-col gap-2">
          {data.map((instance, index) => (
            <div key={index} className="flex gap-2 items-center">
              <span
                className={`${
                  instance.title === "Up to date"
                    ? "bg-green"
                    : instance.title == "Ongoing"
                    ? "bg-orange"
                    : "bg-red"
                } h-6 w-6 rounded-lg`}
              />
              <p
                className={`text-xs ${
                  instance.title === "Up to date"
                    ? "text-green"
                    : instance.title == "Ongoing"
                    ? "text-orange"
                    : "text-red"
                } font-semibold`}
              >
                {instance.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <HoursOverview />
    </div>
  );
};

export default PieChartAndHours;
