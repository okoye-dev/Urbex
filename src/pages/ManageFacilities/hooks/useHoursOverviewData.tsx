export const useHoursOverviewData = () => {
  const row1 = [
    { value: 12, timeline: "", title: "Total scheduled hours" },
    { value: 45, timeline: "hr", title: "Leave hour" },
  ];
  const row2 = [
    { value: 890, timeline: "hrs", title: "Total work" },
    { value: 12, timeline: "days", title: "Total active" },
  ];
  return { row1, row2 };
};
