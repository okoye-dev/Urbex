import { ColumnDef } from "@tanstack/react-table";

export interface FacilityProps {
  nameOfFacility: string;
  type: string;
  status: "Up to date" | "Ongoing" | "Pending";
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
