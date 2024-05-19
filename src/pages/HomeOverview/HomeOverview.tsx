import { FC } from "react";
import Maintenance from "./Maintenance";
import Facilities from "./Facilities";
import TotalDataCard from "../../components/TotalDataCard";
interface IProps {}

const Home: FC<IProps> = () => {
  return (
    <>
      <TotalDataCard />
      <Maintenance />
      <Facilities />
    </>
  );
};

export default Home;
