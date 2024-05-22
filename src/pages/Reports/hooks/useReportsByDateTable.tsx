import pfp1 from "@/assets/pfp1.png";
import pfp2 from "@/assets/pfp2.png";

export const useReportsByDateTable = () => {
  const mockObject = [
    {
      staff: "Jeremy Neigh",
      profileImage: pfp1,
      facility: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d",
      manageReport: "Unattended",
    },
    {
      staff: "Susan Pwajok",
      profileImage: pfp2,
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
