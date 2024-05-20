export const useAddStaffFacilitiesData = () => {
  const mockObject = [
    {
      staffName: "Michael Eneji",
      location: "Ikoyi, Lagos State",
      status: true,
      propertyManaged: 7,
      joiningDate: "12th Nov 2023",
      hours: "9am - 2pm",
    },
    {
      staffName: "Emily Okoro",
      location: "Garki, Abuja",
      status: false,
      propertyManaged: 2,
      joiningDate: "30th Apr 2023",
      hours: "9am - 2pm",
    },
  ];
  const data = Array(8).fill(mockObject).flat();

  return data;
};

export default useAddStaffFacilitiesData;
