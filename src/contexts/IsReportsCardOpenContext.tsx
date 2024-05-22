import { createContext } from "react";

export const IsReportsCardOpenContext = createContext({
  isReportsCardOpen: false,
  toggleIsReportCardOpen: () => {},
});
