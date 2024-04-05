import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

export default function GlobalState({ children }) {
  const [optionApiData, setOptionApiData] = useState("");
  const [fromOptionData, setFromOptionData] = useState({
    imageSrc: "https://flagsapi.com/US/flat/64.png",
    imageAlt: "USA",
    name: "USA",
    curr: 'USD'
  });
  const [toOptionData, setToOptionData] = useState({
    imageSrc: "https://flagsapi.com/IN/flat/64.png",
    imageAlt: "India",
    name: "IND",
    curr: 'INR'
  });

  const [exchangeApiData,setExchangeApiData] = useState('')

  async function fetchOptionsApi() {
    try {
      let resposne = await fetch("https://restcountries.com/v3.1/all");
      let result = await resposne.json();
      setOptionApiData(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchExchangeApi(){
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/e72a28cfd1bc66a5604732db/latest/${fromOptionData.curr}`)
      const result = await response.json();
      // console.log(result);
      setExchangeApiData(result)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchOptionsApi();
  }, []);

  useEffect(() => {
    fetchExchangeApi();
  }, [fromOptionData])

  return (
    <GlobalContext.Provider
      value={{
        optionApiData,
        fromOptionData,
        setFromOptionData,
        toOptionData,
        setToOptionData,
        exchangeApiData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
