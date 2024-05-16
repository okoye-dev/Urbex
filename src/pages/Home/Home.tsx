import { FC } from "react";
import Layout from "@/pages/Layout";
import HomeOverview from "./HomeOverview";
import FacilitiesAndMaintenance from "./FacilitiesAndMaintenance";
import Maintenance from "./Maintenance";
import Facilities from "./Facilities";
interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <Layout>
      <HomeOverview />
      <FacilitiesAndMaintenance />
      <Maintenance />
      <Facilities />
    </Layout>
  );
};

export default Home;
