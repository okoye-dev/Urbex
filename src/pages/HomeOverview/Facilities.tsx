import { FC } from "react";
import FacilitiesSelector from "./FacilitiesSelector";
import FacilitiesTable from "./FacilitiesTable";
import FacilitiesTableHeader from "./FacilitiesTableHeader";

interface IProps {}
const Facilities: FC<IProps> = () => {
  return (
    <span className="flex flex-col bg-white rounded-lg px-8 py-4 gap-4 my-5 mx-6">
      <header className="flex justify-between items-center">
        <p className="font-bold text-lg">Facilities</p>
        <FacilitiesSelector />
      </header>
      <FacilitiesTableHeader />
      <FacilitiesTable />
    </span>
  );
};

export default Facilities;
