export const useAppliancesData = () => {
  const mockObject = {
    name: "Tiles Cleaning",
    dateBought: "Dec 4, 2023",
    scheduledMaintenance: "May 25, 2025",
    description: "Clean and correct tiles",
    status: "Up to date",
  };
  const data = Array(9).fill(mockObject);

  return data;
};

export default useAppliancesData;
