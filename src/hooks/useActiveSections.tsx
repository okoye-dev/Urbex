import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import { useContext } from "react";

const { activeNav } = useContext(ActiveNavContext);
export function isHome() {
  if (activeNav === "Home Overview") {
    return true;
  }
}
export function isCreateFacility() {
  if (activeNav === "Create Facility") {
    return true;
  }
}
