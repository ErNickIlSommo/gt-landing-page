import React, { useState } from "react";

const Accordion = ({ title, subtitle, description }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2 flex flex-col gap-1">
      <button
        className="flex justify-between w-full"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <div className="flex flex-col text-left gap-1">
          <span className="text-3xl md:text-5xl leading-tight xl:leading-relaxed">
            {title}
          </span>
          <span
            className={`text-sm text-[#707070] ${
              !accordionOpen ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-150 duration-300`}
          >
            {!accordionOpen ? subtitle : ""}
          </span>
        </div>
        {!accordionOpen ? (
          <span className="text-2xl md:text-5xl font-extralight leading-tight xl:leading-relaxed">
            +
          </span>
        ) : (
          <span className="text-2xl md:text-5xl font-extralight leading-tight xl:leading-relaxed">
            -
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all delay-150 duration-500 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden font-extralight text-[#707070]">
          {description}
        </div>
      </div>
      <hr className="bg-[#707070] opacity-30" />
    </div>
  );
};

export default Accordion;
