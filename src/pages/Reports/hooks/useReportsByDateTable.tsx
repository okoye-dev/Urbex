export const useReportsByDateTable = () => {
  const mockObject = [
    {
      staff: "Jeremy Neigh",
      facility: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d",
      manageReport: "Unattended",
    },
    {
      staff: "Susan Pwajok",
      facility: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      manageReport: "Attended",
    },
  ];

  const data = Array(9).fill(mockObject).flat();

  return data;
};

export default useReportsByDateTable;
