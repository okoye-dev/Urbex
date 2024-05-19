import { ColumnDef } from "@tanstack/react-table";

export interface FacilitiesDataProps {
  name: string;
  dateBought: string;
  scheduledMaintenance: string
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
];
