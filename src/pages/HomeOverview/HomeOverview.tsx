import { FC } from "react";
import Maintenance from "./Maintenance";
import Facilities from "./Facilities";
import TotalDataCard from "../../components/TotalDataCard";
import { useTotalFacilitiesDataCard } from "@/hooks/useTotalDataCard";
interface IProps {}

const Home: FC<IProps> = () => {
  const data = useTotalFacilitiesDataCard();

  return (
    <>
      <TotalDataCard data={data} />
      <Maintenance />
      <Facilities />
    </>
  );
};

export default Home;
