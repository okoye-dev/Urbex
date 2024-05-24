const placeholder = "Abuja";
const options = [
  { label: "Abuja", val: "Abuja" },
  { label: "Lagos", val: "Lagos" },
  { label: "Ogun", val: "Ogun" },
];

export const useContactsSelector = () => {
  return {
    placeholder,
    options,
  };
};
