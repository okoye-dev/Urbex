import { FC } from "react";
import FacilitiesAndMaintenance from "./FacilitiesAndMaintenance";
import Maintenance from "./Maintenance";
import Facilities from "./Facilities";
interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <>
      <FacilitiesAndMaintenance />
      <Maintenance />
      <Facilities />
    </>
  );
};

export default Home;
