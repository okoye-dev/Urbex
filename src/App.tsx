import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import ReportsCardByDate from "./pages/Reports/ReportsCardByDate";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/home" element={<Home />} />
          <Route
            path="/dashboard/create-facility"
            element={<CreateFacility />}
          />
          <Route
            path="/dashboard/manage-facilities"
            element={<ManageFacilities />}
          />
          <Route
            path="/dashboard/manage-facilities/appliances"
            element={<Appliances />}
          />
          <Route path="/dashboard/attendance" element={<Attendance />} />
          <Route
            path="/dashboard/alert-and-notifications"
            element={<AlertAndNotifications />}
          />
          <Route path="/dashboard/procurement" element={<Procurement />} />
          <Route
            path="/dashboard/add-staff-or-user"
            element={<AddStaffOrUser />}
          />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route
            path="/dashboard/reports/:date"
            element={<ReportsCardByDate />}
          />
          <Route path="/dashboard/help" element={<Help />} />
          <Route path="/dashboard/setting" element={<Setting />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
