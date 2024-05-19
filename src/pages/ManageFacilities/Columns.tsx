import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { Ongoing, Pending, UpToDate } from "./FacilityStatuses";

export interface FacilityProps {
  nameOfFacility: string;
  type: string;
  status: ReactNode;
  numberOfAppliances: number;
  joiningDate: string;
  team: string;
}

export const columns: ColumnDef<FacilityProps>[] = [
  {
    header: "Name of Facility",
    accessorKey: "nameOfFacility",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      const value = info.getValue();
      if (value === "Up to date") {
        return <UpToDate />;
      } else if (value === "Pending") {
        return <Pending />;
      } else if (value === "Ongoing") {
        return <Ongoing />;
      } else {
        return <div>Unknows status</div>;
      }
    },
  },
  {
    header: "Number of Appliances",
    accessorKey: "numberOfAppliances",
  },
  {
    header: "Joining Date",
    accessorKey: "joiningDate",
  },
  {
    header: "Team",
    accessorKey: "team",
  },
];
