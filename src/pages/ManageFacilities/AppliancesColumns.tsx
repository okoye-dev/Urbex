import { ColumnDef } from "@tanstack/react-table";
import { Ongoing, Pending, UpToDate } from "../../components/Statuses";

export interface FacilitiesDataProps {
  name: string;
  dateBought: string;
  scheduledMaintenance: string;
  description: string;
}

export const columns: ColumnDef<FacilitiesDataProps>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Date bought",
    accessorKey: "dateBought",
  },
  {
    header: "Scheduled Maintenance",
    accessorKey: "scheduledMaintenance",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      const value = info.getValue();
      if (value === "Up to date") {
        return <UpToDate edit={true} />;
      } else if (value === "Pending") {
        return <Pending edit={true} />;
      } else if (value === "Ongoing") {
        return <Ongoing edit={true} />;
      } else {
        return <div>Unknown status</div>;
      }
    },
  },
];
