// do any data fetching here
export const useFacilitiesAndMaintenance = () => {
  const facilitiesAndMaintenance = [
    { title: "Total Facilities", value: 88, color: "blue" },
    { title: "Due for maintenance", value: 20, color: "red" },
    { title: "Ongoing maintenance", value: 45, color: "green" },
    { title: "Faulty", value: 12, color: "blue" },
  ];
  return facilitiesAndMaintenance;
};
