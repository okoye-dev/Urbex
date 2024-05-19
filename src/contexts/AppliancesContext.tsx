import { createContext } from "react";

export const AppliancesContext = createContext({
  isAppliancesOpen: false,
  toggleAppliances: () => {},
});
