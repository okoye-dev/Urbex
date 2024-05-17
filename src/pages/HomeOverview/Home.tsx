import { FC } from "react";
import DashboardIntro from "../../components/DashboardIntro";
import FacilitiesAndMaintenance from "./FacilitiesAndMaintenance";
import Maintenance from "./Maintenance";
import Facilities from "./Facilities";
interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <>
      <DashboardIntro />
      <FacilitiesAndMaintenance />
      <Maintenance />
      <Facilities />
    </>
  );
};

export default Home;
