const placeholder = "Newest";

const options = [
  { label: "Newest", val: "newest" },
  { label: "Oldest", val: "oldest" },
];

export const useFacilitiesSelector = () => {
  return { placeholder, options };
};
