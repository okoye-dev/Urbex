import { FC, useContext, useState } from "react";
import { columns } from "@/pages/ManageFacilities/Columns";
import { DataTable } from "@/components/DataTable";
import useManageFacility from "./hooks/useManageFacilities";
import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import { useManageFacilitiesSelector } from "@/pages/ManageFacilities/hooks/useManageFacilitiesSelector";
import { PageNumberContext } from "@/contexts/PageNumberContext";
import Appliances from "./Appliances";
import { AppliancesContext } from "@/contexts/AppliancesContext";
import TotalDataCard from "@/components/TotalDataCard";
import { useTotalFacilitiesDataCard } from "@/hooks/useTotalDataCard";
import { EditAppliancePopUpContext } from "@/contexts/EditAppliancePopUpContext";
import { AddAssetPopUpContext } from "@/contexts/AddAssetPopUpContext";

interface IProps {}

const ManageFacilities: FC<IProps> = () => {
  const facilityData = useManageFacility();
  const { placeholder, options } = useManageFacilitiesSelector();
  const [pageNumber, setPageNumber] = useState(0);
  const { isAppliancesOpen } = useContext(AppliancesContext);
  const data = useTotalFacilitiesDataCard();

  const [isPopUp, setIsPopUp] = useState(false);
  const togglePopUp = () => {
    setIsPopUp(!isPopUp);
  };
  const [isAddAssetPopUp, setIsAddAssetPopUp] = useState(false);
  const toggleAddAssetPopUp = () => {
    setIsAddAssetPopUp(!isAddAssetPopUp);
  };

  return (
    <PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
      {isAppliancesOpen ? (
        <EditAppliancePopUpContext.Provider value={{ isPopUp, togglePopUp }}>
          <AddAssetPopUpContext.Provider
            value={{ isAddAssetPopUp, toggleAddAssetPopUp }}
          >
            <Appliances />
          </AddAssetPopUpContext.Provider>
        </EditAppliancePopUpContext.Provider>
      ) : (
        <>
          <TotalDataCard data={data} />

          <div className="px-6 flex flex-col gap-3 bg-white rounded-lg mx-6 my-8 py-4">
            <div className="flex justify-between items-center">
              <SearchBar />
              <Selector placeholder={placeholder} options={options} />
            </div>
            <h1 className="font-bold py-1"> Facilities</h1>
            <DataTable columns={columns} data={facilityData} />;
          </div>
        </>
      )}
    </PageNumberContext.Provider>
  );
};

export default ManageFacilities;
