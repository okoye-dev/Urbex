import { createContext } from "react";

export const ActiveNavContext = createContext({
  activeNav: "",
  makeActive: (_navItem: string) => {},
});
