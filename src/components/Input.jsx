import React, { useState } from "react";

function Input({value,setValue}) {


  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="amount" className="text-xl ">
        Enter amount
      </label>
      <input
        type="number"
        id="amount"
        placeholder="Enter amount"
        className="px-3 py-2 text-lg outline-none border-2 rounded focus:border-blue-500 valid:border-blue-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}

export default Input;
