import TotalDataCard from "@/components/TotalDataCard";
import { useTotalAppliancesDataCard } from "@/hooks/useTotalDataCard";
import { FC, useContext, useEffect } from "react";
import PieChartAndHours from "@/pages/ManageFacilities/PieChartAndHours";
import { DataTable } from "@/components/DataTable";
import useAppliancesData from "./hooks/useAppliancesData";
import { columns } from "@/pages/ManageFacilities//AppliancesColumns";
import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import { useManageFacilitiesSelector } from "@/pages/ManageFacilities/hooks/useManageFacilitiesSelector";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import EditAppliancePopUp from "./EditAppliancePopUp";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";
import AddAssetPopUp from "./AddAssetPopUp";

interface AppliancesProps {}

const Appliances: FC<AppliancesProps> = () => {
  const totalAppliancesDataCard = useTotalAppliancesDataCard();
  const { placeholder, options } = useManageFacilitiesSelector();
  const data = useAppliancesData();
  const { isPopUp } = useContext(EditAppliancePopUpContext);
  const { isAddAssetPopUp } = useContext(AddAssetPopUpContext);

  return (
    <div>
      {isPopUp && <EditAppliancePopUp />}
      {isAddAssetPopUp && <AddAssetPopUp />}
      <TotalDataCard data={totalAppliancesDataCard} />
      <PieChartAndHours />
      <div className="p-10 rounded-lg bg-white mx-6 my-8 flex flex-col gap-3">
        <div className="flex flex-wrap sm:gap-3 justify-between items-center">
          <SearchBar />
          <Selector placeholder={placeholder} options={options} />
        </div>
        <h1 className="font-bold py-1"> Appliances</h1>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Appliances;
