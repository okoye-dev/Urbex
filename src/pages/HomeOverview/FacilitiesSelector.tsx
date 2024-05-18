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

interface IProps {}

const FacilitiesSelector: FC<IProps> = () => {
  return (
    <Select>
      <SelectTrigger className="w-[140px] rounded-full border-2 border-[#B3B3FF]">
        <img src={newestLeft} alt="" className="px-1" />
        <SelectValue placeholder="Newest" />
      </SelectTrigger>
      <SelectContent className="font-quicksand">
        <SelectItem value="light">Newest</SelectItem>
        <SelectItem value="dark">Oldest</SelectItem>
        <SelectItem value="system">History</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FacilitiesSelector;
