import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

export default function GlobalState({ children }) {
  const [optionApiData, setOptionApiData] = useState("");
  const [fromOptionData, setFromOptionData] = useState({
    imageSrc: "https://flagsapi.com/US/flat/64.png",
    imageAlt: "USA",
    name: "USA",
  });
  const [toOptionData, setToOptionData] = useState({
    imageSrc: "https://flagsapi.com/IN/flat/64.png",
    imageAlt: "India",
    name: "IND",
  });

  async function fetchOptionsApi() {
    try {
      let resposne = await fetch("https://restcountries.com/v3.1/all");
      let result = await resposne.json();
      setOptionApiData(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchOptionsApi();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        optionApiData,
        fromOptionData,
        setFromOptionData,
        toOptionData,
        setToOptionData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
