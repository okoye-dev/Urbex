import { FC } from "react";
import { columns } from "@/pages/HomeOverview/Columns";
import { DataTable } from "@/components/DataTable";
import useFacilitiesTableData from "@/pages/HomeOverview/hooks/useFacilitiesTableData";

interface IProps {}

const FacilitiesTable: FC<IProps> = () => {
  const data = useFacilitiesTableData();
  return <DataTable columns={columns} data={data} />;
};

export default FacilitiesTable;
