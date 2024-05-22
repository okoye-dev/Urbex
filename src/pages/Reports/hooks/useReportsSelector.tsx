const placeholder = "Unattended";

const options = [
  { label: "Unattended", val: "Unattended" },
  { label: "Attended", val: "attended" },
];

export const useReportsSelector = () => {
  return { placeholder, options };
};
