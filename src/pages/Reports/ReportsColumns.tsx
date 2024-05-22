import { ColumnDef } from "@tanstack/react-table";
import { Unattended, Attended } from "../../components/Statuses";

export interface FacilitiesDataProps {
  staff: string;
  facility: string;
  description: string;
  manageReport: string;
}

export const columns: ColumnDef<FacilitiesDataProps>[] = [
  {
    header: "Staff",
    accessorKey: "staff",
  },
  {
    header: "Facility",
    accessorKey: "facility",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Manage Report",
    accessorKey: "manageReport",
    cell: (info) => {
      const value = info.getValue();
      if (value === "Unattended") {
        return <Unattended />;
      } else if (value === "Attended") {
        return <Attended />;
      } else {
        return <div>Unknown status</div>;
      }
    },
  },
];
