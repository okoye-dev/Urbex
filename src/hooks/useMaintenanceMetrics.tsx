// data fetching
export const useMaintenanceMetrics = () => {
  const maintenanceMetrics = [
    { type: "Preventive Maintenance", value: "86.04%" },

    { type: "Planned Maintenance", value: "69.22%" },
    { type: "Reliability Maintenance", value: "96.70%" },
  ];

  const maintenanceMetricsTwo = [
    { type: "Conditon Based Maintenance", value: "609" },
    { type: "Emergency Maintenance", value: "441" },
    { type: "Manufacturing Maintenance", value: "474" },
  ];

  return [maintenanceMetrics, maintenanceMetricsTwo];
};
