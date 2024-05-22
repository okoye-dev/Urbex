import { createContext } from "react";

export const ReportsCardContext = createContext({
  activeReportsCard: "",
  makeActiveReportsCard: (_instance: string) => {},
});
