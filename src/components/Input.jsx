import React from "react";

function Input() {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="amount" className="text-xl ">
        Enter amount
      </label>
      <input
        type="text"
        id="amount"
        placeholder="Enter amount"
        className="px-3 py-2 text-lg outline-none border-2 rounded focus:border-blue-500 valid:border-blue-500"
        required
      />
    </div>
  );
}

export default Input;
