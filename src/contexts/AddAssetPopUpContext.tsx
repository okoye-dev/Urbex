import { createContext } from "react";

export const AddAssetPopUpContext = createContext({
  isAddAssetPopUp: false,
  toggleAddAssetPopUp: () => {},
});
