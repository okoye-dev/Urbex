import { createContext } from "react";

export const EditAppliancePopUpContext = createContext({
  isPopUp: false,
  togglePopUp: () => {},
});
