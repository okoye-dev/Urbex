import { FC } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IProps {
  percentage: number;
}

const GradientCircularProgressbar: FC<IProps> = ({ percentage }: IProps) => {
  return (
    <div className="absolute top-1/4 w-32 max-w-48 m-auto">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(237,7,179)" stopOpacity="1" />
            <stop offset="0%" stopColor="rgb(114,48,245)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(237,7,179)" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: "url(#linear-gradient)",
          trailColor: "rgba(0,0,0,0)",
          rotation: -0.25,
          textSize: "22px",
          textColor: "#fff",
        })}
      >
        <div className="flex flex-col justify-center items-center rounded-full border-2 leading-5 text-2xl font-bold border-white/50 w-24 h-24">
          {`${percentage}%`}{" "}
          <p className="text-white/50 text-xs font-thin">completed</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default GradientCircularProgressbar;
