import { createContext } from "react";

export const ReportsPopUpContext = createContext({
  isReportsPopUpOpen: false,
  toggleReportsPopUp: () => {},
});
