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

interface IProps {}

const MaintenanceStart: FC<IProps> = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="text-xs font-semibold gap-1 flex flex-col w-full">
      Maintenance Start
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"calendar"}
            className={cn(
              "justify-start text-left font-normal text-xs py-4 rounded-lg",
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

export default MaintenanceStart;
