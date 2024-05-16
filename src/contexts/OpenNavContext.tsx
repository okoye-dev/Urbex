import { createContext } from "react";

export const OpenNavContext = createContext({
  navOpen: false,
  toggleNav: () => {},
});
