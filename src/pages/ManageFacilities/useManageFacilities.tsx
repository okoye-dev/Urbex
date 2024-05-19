import { FacilityProps } from "./Columns";

export const useManageFacility = () => {
  const facilities: FacilityProps[] = [
    {
      nameOfFacility: "Sharaton Building",
      type: "Hotel",
      status: "Up to date",
      numberOfAppliances: 927,
      joiningDate: "9th Apr 2024",
      team: "Mr Tunde",
    },
    {
      nameOfFacility: "Eben House",
      type: "Duplex",
      status: "Ongoing",
      numberOfAppliances: 22,
      joiningDate: "9th Apr 2024",
      team: "Emily",
    },
    {
      nameOfFacility: "Heart Plaza",
      type: "Shopping Complex",
      status: "Up to date",
      numberOfAppliances: 233,
      joiningDate: "9th Apr 2024",
      team: "Michael",
    },
    {
      nameOfFacility: "Sharaton Building",
      type: "Hotel",
      status: "Pending",
      numberOfAppliances: 150,
      joiningDate: "9th Apr 2024",
      team: "Mr Tunde",
    },
  ];
  return facilities;
};

export default useManageFacility;
