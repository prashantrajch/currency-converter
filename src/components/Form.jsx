import React, { useContext } from "react";
import Input from "./Input";
import Select from "./Select";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import GlobalContext from "../context/GlobalContext";

function Form() {
  const {
    fromOptionData,
    toOptionData,
    setFromOptionData,
    setToOptionData,
  } = useContext(GlobalContext);

  function handelExchange() {
    let tempObj = fromOptionData;
    setFromOptionData(toOptionData);
    setToOptionData(tempObj);
  }

  return (
    <form className="mt-8 flex flex-col gap-5">
      <Input />
      <div className="flex items-center justify-between gap-3">
        <Select label={"From"} />
        <div className="mt-8 px-2 cursor-pointer" onClick={handelExchange}>
          <CgArrowsExchangeAlt size={"2rem"} />
        </div>
        <Select label={"To"} />
      </div>
      <button className="p-2 text-lg bg-blue-700 text-white rounded-lg">
        Get Exchange rate
      </button>
    </form>
  );
}

export default Form;
