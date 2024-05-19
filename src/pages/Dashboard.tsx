import { FC, useState } from "react";
import Layout from "@/pages/Layout";
import Home from "@/pages/HomeOverview/HomeOverview";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import CreateFacility from "@/pages/CreateFacility/CreateFacility";
import ManageFacilities from "./ManageFacilities/ManageFacilities";

interface IProps {}

const Dashboard: FC<IProps> = () => {
  const [activeNav, setActiveNav] = useState("Home Overview");
  const makeActive = (title: string) => {
    setActiveNav(title);
  };
  return (
    <ActiveNavContext.Provider value={{ activeNav, makeActive }}>
      <Layout>
        {activeNav == "Home Overview" && <Home />}
        {activeNav == "Create Facility" && <CreateFacility />}
        {activeNav == "Manage Facilities" && <ManageFacilities />}
      </Layout>
    </ActiveNavContext.Provider>
  );
};

export default Dashboard;
