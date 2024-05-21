import React, { useState } from "react";
import {
  format,
  startOfMonth,
  addMonths,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isSameDay,
} from "date-fns";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MyCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState<{ date: Date; title: string }[]>([]);

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startDayOfWeek = getDay(firstDayOfMonth);

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, -1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  return (
    <div className="w-full overflow-x-scroll">
      <div className="p-8 bg-white shadow rounded-lg min-w-[700px]">
        <section className="flex justify-between items-center mb-4 text-2xl font-semibold">
          <div className="flex items-center gap-2">
            <h2>{format(firstDayOfMonth, "MMMM")}</h2>
            <span>
              <IoIosArrowUp
                onClick={goToPreviousMonth}
                className="w-5 hover:bg-blue/5 transition-all duration-300 ease-in-out rounded-full"
              />
              <IoIosArrowDown
                onClick={goToNextMonth}
                className="w-5 hover:bg-blue/5 transition-all duration-300 ease-in-out rounded-full"
              />
            </span>
          </div>
          <h2>{format(firstDayOfMonth, "yyyy")}</h2>
        </section>

        <section className="grid grid-cols-7 text-xs text-center font-semibold">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-6 font-medium flex">
              {day}
            </div>
          ))}
          {Array(startDayOfWeek)
            .fill(0)
            .map(() => (
              <div key={Math.random()} />
            ))}
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className={`px-4 min-h-[60px] py-2 flex flex-col items-start text-blue/70 border border-blue/5`}
            >
              {format(day, "d")}
              {events
                .filter((event) => isSameDay(event.date, day))
                .map((event, i) => (
                  <div
                    key={i}
                    className="bg-blue-100 text-blue-800 p-1 mt-1 rounded"
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyCalendar;
