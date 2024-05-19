import Selector from "@/components/Selector";
import { FC } from "react";
import { useFacilitiesSelector } from "@/pages/HomeOverview/hooks/useFacilitiesSelector";

interface IProps {}

const FacilitiesSelector: FC<IProps> = () => {
  const { placeholder, options } = useFacilitiesSelector();

  return <Selector placeholder={placeholder} options={options} />;
};

export default FacilitiesSelector;
