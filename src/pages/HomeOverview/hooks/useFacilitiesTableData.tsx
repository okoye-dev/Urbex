import { FacilitiesDataProps } from "../Columns";

export const useFacilitiesTableData = () => {
  const mockObject = {
    name: "Tiles Cleaning",
    dateBought: "Dec 4, 2023",
    scheduledMaintenance: "May 25, 2025",
    description: "Clean and correct tiles",
  };
  const facilitiesTableData: FacilitiesDataProps[] = Array(9).fill(mockObject);

  return facilitiesTableData;
};

export default useFacilitiesTableData;
