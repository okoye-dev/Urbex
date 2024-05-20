const schedulePlaceholder = "Daily";

const scheduleOptions = [
  { label: "Daily", val: "daily" },
  { label: "Weekly", val: "weekly" },
  { label: "Monthly", val: "monthly" },
  { label: "2 Months", val: "twomonths" },
  { label: "Quarterly", val: "quarterly" },
  { label: "6 Months", val: "sixmonths" },
  { label: "Yearly", val: "yearly" },
];

export const useMaintenanceScheduleSelector = () => {
  return { schedulePlaceholder, scheduleOptions };
};
