import React, { useContext, useState } from "react";
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
    exchangeApiData,
  } = useContext(GlobalContext);

  const [value, setValue] = useState("1");
  const [amount, setAmount] = useState("1");

  function handelExchange() {
    let tempObj = fromOptionData;
    setFromOptionData(toOptionData);
    setToOptionData(tempObj);
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (value == 0 || value == "") {
      setValue("1");
      setAmount("1");
    }
    else{
      setAmount(value);
    }
  }

  return (
    <form className="mt-8 flex flex-col gap-5" onSubmit={handleSumbit}>
      <Input value={value} setValue={setValue} />
      <div className="flex items-center justify-between gap-3">
        <Select label={"From"} />
        <div className="mt-8 px-2 cursor-pointer" onClick={handelExchange}>
          <CgArrowsExchangeAlt size={"2rem"} />
        </div>
        <Select label={"To"} />
      </div>
      {!exchangeApiData ? (
        <p>Getting Data...</p>
      ) : (
        <p className="text-xl ">
          {amount} {exchangeApiData.base_code} = {' '}
          {amount * exchangeApiData.conversion_rates[toOptionData.curr]} {' '}
          {toOptionData.curr}
        </p>
      )}
      <button className="p-2 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Get Exchange rate
      </button>
    </form>
  );
}

export default Form;
