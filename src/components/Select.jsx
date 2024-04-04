import React, { useContext, useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import Options from "./Options";
import GlobalContext from "../context/GlobalContext";

function Select({ label }) {
  const optionRef = useRef();

  const { optionApiData, fromOptionData, toOptionData } =
    useContext(GlobalContext);

  function handleSelectClick() {
    optionRef.current.classList.remove("hidden");
    optionRef.current.classList.add("border");
  }

  useEffect(() => {
    optionRef.current.classList.add("hidden");
  }, []);

  return (
    <div className="flex flex-col gap-1 flex-1">
      <p className=" text-xl">{label}</p>
      <div
        className="border-2 rounded-md relative hover:border-red-400 hover:border-2"
        id={label}
      >
        {label == "From" ? (
          <div
            className="flex justify-center items-center gap-2 py-1 cursor-pointer"
            onClick={handleSelectClick}
          >
            <img
              src={fromOptionData.imageSrc}
              alt={fromOptionData.alt}
              width={"30px"}
              className="ml-1 h-6"
            />
            <span>{fromOptionData.name}</span>
            <IoChevronDown />
          </div>
        ) : (
          <div
            className="flex justify-center items-center gap-2 py-1 cursor-pointer"
            onClick={handleSelectClick}
          >
            <img
              src={toOptionData.imageSrc}
              alt={toOptionData.alt}
              width={"30px"}
              className="ml-1 h-6"
            />
            <span>{toOptionData.name} </span>
            <IoChevronDown />
          </div>
        )}
        <div
          ref={optionRef}
          className="absolute top-[100%] w-full bg-white max-h-52 overflow-auto no-scrollbar mt-[2px] "
        >
          {optionApiData &&
            optionApiData.map((options, ind) => (
              <Options
                key={ind}
                refrence={optionRef}
                optionsApiData={options}
                labelName={label}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
