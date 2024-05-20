export const useAlerts = () => {
  const data = [
    {
      status: "Up to date",
      alert: "Piping system fixed at Eben House",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      staff: "Mr Tunde",
      date: "24 May, 2024",
      time: "9:30 am",
    },
    {
      status: "Pending",
      alert: "Maintenance of AC due at Sheraton Building",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      staff: "Emily",
      date: "24 May, 2024",
      time: "9:30 am",
    },
    {
      status: "Ongoing",
      alert: "Pumping maintenance at Heart Plaza currently in progress",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      staff: "Michael",
      date: "24 May, 2024",
      time: "9:30 am",
    },
  ];

  const repeatedData = Array(3).fill(data).flat();

  return repeatedData;
};
