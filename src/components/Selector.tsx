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
  placeholder: string;
  options: {
    val: string;
    label: string;
  }[];
}

const Selector: FC<SelectorProps> = ({
  placeholder,
  options,
}: SelectorProps) => {
  return (
    <Select>
      <SelectTrigger className={`w-fit rounded-full border-2 border-[#B3B3FF]`}>
        <img src={newestLeft} alt="" className="px-1" width={25} />
        <span className="px-1">
          <SelectValue placeholder={placeholder} />
        </span>
      </SelectTrigger>

      <SelectContent className="font-quicksand">
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
