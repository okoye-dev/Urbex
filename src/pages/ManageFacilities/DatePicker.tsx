import { FC, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IProps {
  title: string;
}

const DatePicker: FC<IProps> = ({ title }: IProps) => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="text-sm font-semibold gap-2 flex flex-col w-full">
      {title}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"calendar"}
            className={cn(
              "justify-start text-left font-normal text-sm py-4 rounded-lg",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Choose date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
