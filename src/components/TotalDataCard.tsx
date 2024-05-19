import { FC } from "react";
import { TotalDataProps } from "@/hooks/useTotalDataCard";

const TotalDataCard: FC<{ data: TotalDataProps[] }> = ({ data }) => {
  return (
    <div className="px-6 mt-8 mb-6 text-sm">
      <section className="font-semibold flex bg-white rounded-lg">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="hidden lg:flex flex-col justify-center gap-3 py-5 w-full lg:px-8 px-4 relative"
            >
              <p className="font-medium text-black/80">{item.title}</p>
              <p
                className={`text-2xl ${
                  item.color == "red"
                    ? "text-red"
                    : item.color == "green"
                    ? "text-green"
                    : "text-blue"
                }`}
              >
                {item.value}
              </p>
              <span
                className={`w-[2px] h-4/5 top-[10%] bg-lightgray absolute right-2 ${
                  index == 3 && "hidden"
                }`}
              ></span>
            </div>
          );
        })}
      </section>

      <section className="font-semibold lg:hidden flex flex-wrap bg-white rounded-lg justify-center p-6 gap-3">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="sm:static flex flex-col justify-center gap-3 py-4 px-4 md:px-8 relative w-[45%] text-xs ipad:text-sm md:text-base bg-lightgray rounded-lg"
            >
              <p className="font-medium text-black/80">{item.title}</p>
              <p
                className={`text-2xl ${
                  item.color == "red"
                    ? "text-red"
                    : item.color == "green"
                    ? "text-green"
                    : "text-blue"
                }`}
              >
                {item.value}
              </p>
              <span
                className={`w-[2px] h-4/5 top-[10%] bg-lightgray absolute right-2 ${
                  index == 3 && "hidden"
                }`}
              ></span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TotalDataCard;
