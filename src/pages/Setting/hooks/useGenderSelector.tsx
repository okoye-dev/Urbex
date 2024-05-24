const placeholder = "Male";
const options = [
  { label: "Male", val: "Male" },
  { label: "Female", val: "Female" },
  { label: "Other", val: "Other" },
];

export const useGenderSelector = () => {
  return {
    placeholder,
    options,
  };
};
