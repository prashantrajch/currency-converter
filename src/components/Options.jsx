import React, { useContext, useRef } from "react";
import GlobalContext from "../context/GlobalContext";

function Options({ refrence, optionsApiData, labelName }) {
  const { setFromOptionData, setToOptionData } = useContext(GlobalContext);

  const optionRef = useRef();

  function handleOptionClick() {
    refrence.current.classList.add("hidden");
    refrence.current.classList.remove("border");
    // console.log(optionRef.current.children)
    const { src, alt } = optionRef.current.children[0];
    const { innerText } = optionRef.current.children[1];
    // console.log(alt);
    // console.log(labelName)
    if (labelName == "From") {
      setFromOptionData({
        imageSrc: src,
        imageAlt: alt,
        name: innerText,
      });
    } else {
      setToOptionData({
        imageSrc: src,
        name: innerText,
      });
    }
  }

  return (
    <div
      ref={optionRef}
      className="flex pl-2.5 items-center gap-2 py-1 hover:bg-slate-200 cursor-pointer"
      onClick={handleOptionClick}
    >
      {/* <img src={`https://flagsapi.com/${optionsApiData.cca2}/flat/32.png`} alt="" /> */}
      <img
        src={optionsApiData.flags.svg}
        alt={optionsApiData.flags.alt}
        width={"30px"}
        className=" h-6"
      />
      <span>{optionsApiData.cioc || optionsApiData.cca2}</span>
    </div>
  );
}

export default Options;
