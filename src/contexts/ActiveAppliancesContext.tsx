import { createContext } from "react";

export const ActiveAppliancesContext = createContext({
  activeAppliance: "",
  openActiveAppliance: (_instance: string) => {},
});
