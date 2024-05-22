import { FC } from "react";
import search from "@/assets/search.svg";

interface SearchBarProps {
  className?: string;
}

const SearchBar: FC<SearchBarProps> = ({ className }: SearchBarProps) => {
  return (
    <div className="relative w-1/2 ipad:w-3/5">
      <img
        src={search}
        alt="search"
        width={12}
        className="absolute top-1/4 left-2"
      />
      <input
        type="text"
        placeholder="Search"
        className={`${className!} w-full min-w-40 border border-black/30 rounded-lg py-1 px-6 focus:outline-none text-sm`}
      />
    </div>
  );
};

export default SearchBar;
