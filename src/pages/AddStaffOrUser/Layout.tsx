import TotalDataCard from "@/components/TotalDataCard";
import { useTotalStaffDataCard } from "@/hooks/useTotalDataCard";
import { FC, useContext } from "react";
import AddStaffFacilitiesTable from "./AddStaffFacilitiesTable";
import { AddStaffOrUserContext } from "@/contexts/AddStaffOrUserContext";
import AddStaffOrUserPopUp from "./AddStaffOrUserPopUp";

interface IProps {}

const AddStaffOrUser: FC<IProps> = () => {
  const data = useTotalStaffDataCard();
  const { isAddStaffPopUp } = useContext(AddStaffOrUserContext);
  return (
    <div>
      {isAddStaffPopUp && <AddStaffOrUserPopUp />}
      <TotalDataCard data={data} />
      <AddStaffFacilitiesTable />
    </div>
  );
};

export default AddStaffOrUser;
