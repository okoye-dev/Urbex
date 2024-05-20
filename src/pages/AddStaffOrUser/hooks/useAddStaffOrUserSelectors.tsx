const locationPlaceholder = "Abuja";
const locationOptions = [
  { label: "Abuja", val: "abuja" },
  { label: "Lagos", val: "lagos" },
  { label: "Ogun", val: "ogun" },
];

export const useAddStaffOrUserLoactionSelector = () => {
  return { locationPlaceholder, locationOptions };
};

const townPlaceholder = "Garki";
const townOptions = [
  { label: "Garki", val: "garki" },
  { label: "Maitama", val: "maitama" },
  { label: "Asokoro", val: "asokoro" },
  { label: "Gwarimpa", val: "gwarimpa" },
];

export const useAddStaffOrUserTownSelector = () => {
  return { townPlaceholder, townOptions };
};

const listPlaceholder = "List of facilities";
const listOptions = [
  { label: "Duplex", val: "Duplex" },
  { label: "Shopping Complex", val: "shoppingcomplex" },
];

export const useAddStaffOrUserListSelector = () => {
  return { listPlaceholder, listOptions };
};
