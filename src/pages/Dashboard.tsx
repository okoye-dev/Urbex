import { FC, useEffect, useState } from "react";
import Layout from "@/pages/Layout";
import Home from "@/pages/HomeOverview/Home";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import CreateFacility from "@/pages/CreateFacility/CreateFacility";

interface IProps {}

const Dashboard: FC<IProps> = () => {
  const [activeNav, setActiveNav] = useState("Home Overview");
  const makeActive = (title: string) => {
    setActiveNav(title);
  };

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  return (
    <ActiveNavContext.Provider value={{ activeNav, makeActive }}>
      <Layout>
        {activeNav == "Home Overview" && <Home />}
        {activeNav == "Create Facility" && <CreateFacility />}
      </Layout>
    </ActiveNavContext.Provider>
  );
};

export default Dashboard;
