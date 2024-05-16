export interface IList {
  name: string;
  due: string;
}

export const useMaintenanceInProgress = () => {
  const list: IList[] = [
    { name: "Air Conditioner", due: "May 21" },
    { name: "Toilet Seat", due: "June 21" },
    { name: "Mai Kano Lister", due: "Juky 21" },
    { name: "Street Light", due: "March 22" },
    { name: "POP", due: "March 12" },
    { name: "Tiles Cleaning", due: "May 29" },
    { name: "Pumping Machine", due: "May 21" },
  ];
  return list;
};
