import SearchBar from "@/components/SearchBar";
import { FC } from "react";
import FAQs from "./Faqs";

interface IProps {}

const Help: FC<IProps> = () => {
  return (
    <div className="px-7 py-8 flex flex-col gap-12 ipad:gap-16 text-blue">
      <section className="flex flex-col justify-center items-center gap-6 ipad:gap-10 w-full">
        <h1 className="font-bold text-2xl md:text-[34px] font-syne text-center">
          Hello, how can we help?
        </h1>
        <div className="w-full md:w-[90%] flex justify-center items-center">
          <SearchBar
            fullWidth={true}
            placeholder="Ask a question..."
            lightVersion={true}
          >
            <div className="right-2 absolute bg-blue px-4 ipad:px-6 py-1 text-sm top-[6px] text-white rounded-[10px]">
              Search
            </div>
          </SearchBar>
        </div>
      </section>

      <section>
        <p className="font-bold text-2xl md:text-[34px] font-syne">FAQs</p>
        <FAQs />
      </section>
    </div>
  );
};

export default Help;
