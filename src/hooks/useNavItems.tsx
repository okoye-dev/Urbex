import home from "@/assets/nav/home.svg";
import create from "@/assets/nav/create.svg";
import manage from "@/assets/nav/create.svg";
import attendance from "@/assets/nav/attendance.svg";
import alert from "@/assets/nav/attendance.svg";
import procurement from "@/assets/nav/attendance.svg";
import add from "@/assets/nav/create.svg";
import reports from "@/assets/nav/reports.svg";
import help from "@/assets/nav/help.svg";
import setting from "@/assets/nav/setting.svg";
import homeFocus from "@/assets/nav/home-focus.svg";
import createFocus from "@/assets/nav/create-focus.svg";
import manageFocus from "@/assets/nav/create-focus.svg";
import attendanceFocus from "@/assets/nav/attendance-focus.svg";
import alertFocus from "@/assets/nav/attendance-focus.svg";
import procurementFocus from "@/assets/nav/attendance-focus.svg";
import addFocus from "@/assets/nav/create-focus.svg";
import reportsFocus from "@/assets/nav/reports-focus.svg";
import helpFocus from "@/assets/nav/help-focus.svg";
import settingFocus from "@/assets/nav/setting-focus.svg";

export const useNavItems = () => {
  const navItems = [
    {
      iconFocus: homeFocus,
      icon: home,
      title: "Home Overview",
      route: "home",
    },
    {
      iconFocus: createFocus,
      icon: create,
      title: "Create Facility",
      route: "create-facility",
    },
    {
      iconFocus: manageFocus,
      icon: manage,
      title: "Manage Facilities",
      route: "manage-facilities",
    },
    {
      iconFocus: attendanceFocus,
      icon: attendance,
      title: "Attendance",
      route: "attendance",
    },
    {
      iconFocus: alertFocus,
      icon: alert,
      title: "Alert and Notifications",
      route: "alert-and-notifications",
    },
    {
      iconFocus: procurementFocus,
      icon: procurement,
      title: "Procurement",
      route: "procurement",
    },
    {
      iconFocus: addFocus,
      icon: add,
      title: "Add Staff/User",
      route: "add-staff-or-user",
    },
    {
      iconFocus: reportsFocus,
      icon: reports,
      title: "Reports",
      route: "reports",
    },
    { iconFocus: helpFocus, icon: help, title: "Help", route: "help" },
    {
      iconFocus: settingFocus,
      icon: setting,
      title: "Setting",
      route: "setting",
    },
  ];

  return navItems;
};
