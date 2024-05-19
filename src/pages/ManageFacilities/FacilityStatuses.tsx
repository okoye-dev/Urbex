export const UpToDate = () => {
  return (
    <div className="py-1 px-3 flex justify-center items-center text-nowrap text-xs rounded-full bg-green text-white text-center">
      Up to date
    </div>
  );
};
export const Ongoing = () => {
  return (
    <div className="py-1 px-3 flex justify-center items-center text-nowrap text-xs rounded-full bg-orange-400 text-black">
      Ongoing
    </div>
  );
};
export const Pending = () => {
  return (
    <div className="py-1 px-3 flex justify-center items-center text-nowrap text-xs rounded-full bg-red text-white">
      Pending
    </div>
  );
};
