import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Home from "./pages/HomeOverview/Layout";
import CreateFacility from "./pages/CreateFacility/Layout";
import ManageFacilities from "./pages/ManageFacilities/Layout";
import Attendance from "./pages/Attendance/Layout";
import AlertAndNotifications from "./pages/AlertAndNotifications/Layout";
import Procurement from "./pages/Procurement/Layout";
import AddStaffOrUser from "./pages/AddStaffOrUser/Layout";
import Reports from "./pages/Reports/Layout";
import Help from "./pages/Help/Layout";
import Setting from "./pages/Setting/Layout";
import Appliances from "./pages/ManageFacilities/Appliances";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/home" element={<Home />}></Route>
          <Route
            path="/dashboard/create-facility"
            element={<CreateFacility />}
          ></Route>
          <Route
            path="/dashboard/manage-facilities"
            element={<ManageFacilities />}
          ></Route>
          <Route
            path="/dashboard/manage-facilities/appliances"
            element={<Appliances />}
          ></Route>
          <Route path="/dashboard/attendance" element={<Attendance />}></Route>
          <Route
            path="/dashboard/alert-and-notifications"
            element={<AlertAndNotifications />}
          ></Route>
          <Route
            path="/dashboard/procurement"
            element={<Procurement />}
          ></Route>
          <Route
            path="/dashboard/add-staff-or-user"
            element={<AddStaffOrUser />}
          ></Route>
          <Route path="/dashboard/reports" element={<Reports />}></Route>
          <Route path="/dashboard/help" element={<Help />}></Route>
          <Route path="/dashboard/settings" element={<Setting />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
