import { FC, useEffect, useState } from "react";
import Layout from "@/pages/Layout";
import Home from "@/pages/HomeOverview/Layout";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";
import CreateFacility from "@/pages/CreateFacility/Layout";
import ManageFacilities from "./ManageFacilities/Layout";
import AlertAndNotifications from "./AlertAndNotifications/Layout";
import AddStaffOrUser from "./AddStaffOrUser/Layout";
import Reports from "./Reports/Layout";

interface IProps {}

const Dashboard: FC<IProps> = () => {
  const [activeNav, setActiveNav] = useState("Home Overview");
  const makeActive = (title: string) => {
    setActiveNav(title);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeNav]);

  return (
    <ActiveNavContext.Provider value={{ activeNav, makeActive }}>
      <Layout>
        {activeNav == "Home Overview" && <Home />}
        {activeNav == "Create Facility" && <CreateFacility />}
        {activeNav == "Manage Facilities" && <ManageFacilities />}
        {activeNav == "Alert and Notifications" && <AlertAndNotifications />}
        {activeNav == "Add Staff/User" && <AddStaffOrUser />}
        {activeNav == "Reports" && <Reports />}
      </Layout>
    </ActiveNavContext.Provider>
  );
};

export default Dashboard;
