import { createContext } from "react";

export const AddStaffOrUserContext = createContext({
  isAddStaffPopUp: false,
  toggleAddStaffPopUp: () => {},
});
