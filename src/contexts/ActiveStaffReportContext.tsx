import { createContext } from "react";

export const ActiveStaffReportContext = createContext({
  activeStaff: "",
  makeStaffActive: (_navItem: string) => {},
});
