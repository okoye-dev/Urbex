import { FC } from "react";
import { useManageFacilitiesSelector } from "@/pages/ManageFacilities/hooks/useManageFacilitiesSelector";
import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import useAddStaffFacilitiesData from "./hooks/useAddStaffFacilitiesData";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/pages/AddStaffOrUser/Columns";

interface IProps {}

const AddStaffFacilitiesTable: FC<IProps> = () => {
  const { placeholder, options } = useManageFacilitiesSelector();
  const data = useAddStaffFacilitiesData();
  return (
    <div className="px-6 flex flex-col gap-3 bg-white rounded-lg mx-6 my-8 py-4">
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <SearchBar />
        <Selector placeholder={placeholder} options={options} />
      </div>
      <h1 className="font-bold py-1"> Facilities</h1>
      <DataTable columns={columns} data={data} />;
    </div>
  );
};

export default AddStaffFacilitiesTable;
