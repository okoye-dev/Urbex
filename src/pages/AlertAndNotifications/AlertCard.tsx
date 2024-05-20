import { FC } from "react";
import cancel from "@/assets/cancel.svg";
import clock from "@/assets/clock.svg";

interface AlertCardProps {
  status: string;
  alert: string;
  details: string;
  staff: string;
  date: string;
  time: string;
}

const AlertCard: FC<AlertCardProps> = ({
  status,
  alert,
  details,
  staff,
  date,
  time,
}: AlertCardProps) => {
  return (
    <div className="flex items-start justify-between border-b-2 border-blue/10 py-4 w-full gap-8">
      <section className="flex items-start gap-4">
        <img src={cancel} alt="close" className="cursor-pointer w-[20px]" />

        <div className="flex flex-col gap-2 text-xs">
          <span
            className={`${
              status === "Up to date"
                ? "bg-green text-white"
                : status === "Ongoing"
                ? "bg-orange"
                : "bg-red text-white"
            } w-24 py-[3px] text-[0.7rem] text-center rounded-md font-medium`}
          >
            {status}
          </span>

          <h1 className="font-bold">{alert}</h1>
          <p className="font-semibold text-blue/50">{details}</p>
          <p className="font-bold text-red">Staff: {staff}</p>
        </div>
      </section>

      <section className="text-blue/50 text-[0.65rem] font-semibold">
        <p className="text-balance relative min-w-12">
          <img src={clock} alt="time" className="w-[16px] absolute -left-5" />
          {date} at {time}
        </p>
      </section>
    </div>
  );
};

export default AlertCard;
