// do any data fetching here

export interface TotalDataProps {
  title: string;
  value: number;
  color: string;
}
export const useTotalFacilitiesDataCard = () => {
  const totalFacilitiesDataCard: TotalDataProps[] = [
    { title: "Total Facilities", value: 88, color: "blue" },
    { title: "Due for maintenance", value: 20, color: "red" },
    { title: "Ongoing maintenance", value: 45, color: "green" },
    { title: "Faulty", value: 12, color: "blue" },
  ];
  return totalFacilitiesDataCard;
};

export const useTotalAppliancesDataCard = () => {
  const totalAppliancesDataCard: TotalDataProps[] = [
    { title: "Total Appliances", value: 22, color: "blue" },
    { title: "Due for maintenance", value: 7, color: "red" },
    { title: "Ongoing maintenance", value: 4, color: "green" },
    { title: "Faulty", value: 0, color: "blue" },
  ];
  return totalAppliancesDataCard;
};

export const useTotalStaffDataCard = () => {
  const totalStaffDataCard: TotalDataProps[] = [
    { title: "Total Staff", value: 120, color: "blue" },
    { title: "Active", value: 120, color: "red" },
    { title: "Inactive", value: 0, color: "green" },
    { title: "Clocked In", value: 82, color: "blue" },
  ];
  return totalStaffDataCard;
};

export const useTotalReportsDataCard = () => {
  const totalReportsDataCard: TotalDataProps[] = [
    { title: "Total Reports", value: 70, color: "blue" },
    { title: "Attended Reports", value: 45, color: "red" },
    { title: "Unattended Reports", value: 25, color: "green" },
    { title: "New Reports This Month", value: 8, color: "blue" },
  ];
  return totalReportsDataCard;
};
