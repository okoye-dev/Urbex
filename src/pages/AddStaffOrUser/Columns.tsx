import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface AddStaffFacilitiesProps {
  staffName: string;
  location: string;
  status: ReactNode;
  propertyManaged: number;
  joiningDate: string;
  hours: string;
}

export const HasClockedIn = () => {
  return (
    <div className="w-24 py-1 text-[0.7rem] text-center rounded-md font-medium bg-green text-white">
      Clocked in
    </div>
  );
};

export const HasNotClockedIn = () => {
  return (
    <div className="w-24 py-1 text-[0.7rem] text-center rounded-md font-medium bg-blue/20 text-white">
      Clocked in
    </div>
  );
};

export const columns: ColumnDef<AddStaffFacilitiesProps>[] = [
  {
    header: "Staff Name",
    accessorKey: "staffName",
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      const value = info.getValue();
      if (value) {
        return <HasClockedIn />;
      } else {
        return <HasNotClockedIn />;
      }
    },
  },
  {
    header: "Property Managed",
    accessorKey: "propertyManaged",
  },
  {
    header: "Joining Date",
    accessorKey: "joiningDate",
  },
  {
    header: "Hours",
    accessorKey: "hours",
  },
];
