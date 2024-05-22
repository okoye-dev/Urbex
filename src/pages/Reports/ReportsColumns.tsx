import { ColumnDef } from "@tanstack/react-table";
import { Unattended, Attended } from "../../components/Statuses";

export interface ReportsDataProps {
  staff: string;
  profileImage: string;
  facility: string;
  description: string;
  manageReport: string;
}

export const columns: ColumnDef<ReportsDataProps>[] = [
  {
    header: "Staff",
    accessorKey: "staff",
    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex gap-2 items-center">
          <img src={row.profileImage} alt="pfp" width={24} height={24} />
          <span>{row.staff}</span>
        </div>
      );
    },
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
