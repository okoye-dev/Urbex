import { FC } from "react";
import search from "@/assets/search.svg";

interface SearchBarProps {
  className?: string;
  children: any;
  placeholder?: string;
  lightVersion?: boolean;
  fullWidth?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({
  className,
  children,
  placeholder = "Search",
  lightVersion,
  fullWidth = false,
}: SearchBarProps) => {
  return (
    <div
      className={`${fullWidth ? "w-full" : "w-1/2"} relative ipad:w-3/5 flex`}
    >
      <img
        src={search}
        alt="search"
        width={14}
        className="absolute top-[30%] left-2"
      />
      <input
        type="text"
        placeholder={placeholder}
        className={`${className!} w-full min-w-40 border ${
          lightVersion
            ? "border-blue/15 placeholder:text-blue/30 rounded-xl h-10"
            : "h-9 border-black/30 rounded-lg"
        } py-1 px-7 focus:outline-none text-base`}
      />
      <div className="absolute w-full">{children}</div>
    </div>
  );
};

export default SearchBar;
