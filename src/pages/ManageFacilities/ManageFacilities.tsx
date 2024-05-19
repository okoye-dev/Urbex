import { FC } from "react";
import { columns } from "@/pages/ManageFacilities/Columns";
import { DataTable } from "@/components/DataTable";
import useManageFacility from "./useManageFacilities";

interface IProps {}

const ManageFacilities: FC<IProps> = () => {
  const data = useManageFacility();

  return <DataTable columns={columns} data={data} />;
};

export default ManageFacilities;
