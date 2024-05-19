import { FC } from "react";
import { columns } from "@/pages/ManageFacilities/Columns";
import { DataTable } from "@/components/DataTable";
import useManageFacility from "./hooks/useManageFacilities";
import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import { useManageFacilitiesSelector } from "@/pages/ManageFacilities/hooks/useManageFacilitiesSelector";

interface IProps {}

const ManageFacilities: FC<IProps> = () => {
  const data = useManageFacility();
  const { placeholder, options } = useManageFacilitiesSelector();

  return (
    <div className="px-6 flex flex-col gap-3 bg-white rounded-lg mx-6 py-4">
      <div className="flex justify-between items-center">
        <SearchBar />
        <Selector placeholder={placeholder} options={options} />
      </div>
      <DataTable columns={columns} data={data} />;
    </div>
  );
};

export default ManageFacilities;
