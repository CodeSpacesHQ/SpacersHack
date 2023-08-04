import React, { useState } from "react";
const typeSpeakers = ["Speakers", "Jury", "Mentors", "Sponsors Representive"];

import AnimateWords from "../../config/textAnimation";

const LineUp: React.FC = () => {
  const [active, setActive] = useState<string>("Speakers");

  const setActiveElement = (item: string): void => {
    setActive(item);
  };
  const textColor = (item: string) => {
    if (item === "Sponsors Representive" && item !== active) {
      return "text-[#A6A6A6]";
    } else if (item === active) {
      return "text-[#5D5CD6]";
    } else {
      return "text-black";
    }
  };

  return (
    <section className="relative h-screen bg-white px-[29px] sm:px-[64px] lg:px-[69.83px] xl:px-[102px] max-w-[1500px] mx-auto pt-20">
      <div className="flex sm:gap-8 sm:justify-start justify-between border-b-[#C2C2F0] border-b-[0.2px] w-full">
        {typeSpeakers.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => setActiveElement(item)}
              className={`font-gelion text-[16px]/[19px] tracking-[-0.02em] cursor-pointer pb-4 ${textColor(
                item
              )} ${active === item ? "border-b-[#5D5CD6] border-b-4" : ""} ${
                item === "All" ? "w-10" : ""
              }`}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex justify-center w-full mt-[164px] sm:mt-64">
        <h2 className="font-gelion text-[#868687] font-semibold max-sm:font-medium max-sm:text-[20px]/6 max-xl:text-[40px] text-[55px]/[66px] tracking-[-0.02em]">
          <AnimateWords text="Will be uploaded soon... 🚀🚀" />
        </h2>
      </div>
    </section>
  );
};

export default LineUp;
