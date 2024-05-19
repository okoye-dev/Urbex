const placeholder = "All";

const options = [
  { label: "Up to date", val: "upToDate" },
  { label: "Ongoing", val: "ongoing" },
  { label: "Pending", val: "pending" },
];

export const useManageFacilitiesSelector = () => {
  return { placeholder, options };
};
