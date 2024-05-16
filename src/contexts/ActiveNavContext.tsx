import { createContext } from "react";

export const ActiveNavContext = createContext({
  activeNav: "",
  makeActive: (navItem: string) => {},
});
