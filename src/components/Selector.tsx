import {
  SelectContent,
  SelectItem,
  SelectValue,
  Select,
  SelectTrigger,
} from "@/components/ui/select";
import {} from "@radix-ui/react-select";
import { FC } from "react";
import newestLeft from "@/assets/newest-left.svg";

interface SelectorProps {
  blue?: boolean;
  borderLeft?: boolean;
  fitContent?: boolean;
  notRoundedFully?: boolean;
  icon?: boolean;
  placeholder: string | number | undefined;
  options: {
    val: string;
    label: string;
  }[];
}

const Selector: FC<SelectorProps> = ({
  blue = false,
  borderLeft = false,
  fitContent = true,
  notRoundedFully = false,
  icon = true,
  placeholder,
  options,
}: SelectorProps) => {
  return (
    <Select>
      <SelectTrigger
        className={` ${fitContent ? "w-fit" : "w-full text-xs"} ${
          notRoundedFully
            ? "rounded-lg border"
            : "rounded-full border-2 border-[#B3B3FF]"
        }`}
      >
        {icon && <img src={newestLeft} alt="" className="px-1" width={25} />}
        {borderLeft && (
          <div className="absolute -translate-x-1 w-[2px] h-5 bg-blue/20"></div>
        )}
        <span className="px-1">
          <SelectValue placeholder={placeholder} />
        </span>
      </SelectTrigger>

      <SelectContent
        className={`font-quicksand ${blue && "bg-blue text-white"}`}
      >
        {options.map((item, index) => (
          <SelectItem key={index} value={item.val}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selector;
