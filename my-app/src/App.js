import "./App.css";
import React, { useState, useEffect } from "react";
import Miniature from "./Miniature.js";
import Toolbar from "./Toolbar.js";
import Detail from "./Detail.js";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [detailName, setDetailName] = useState("");

  useEffect(() => {
    if (search === "") {
      fetch("https://restcountries.com/v3.1/all")
        .then((resp) => resp.json())
        .then((dataObj) => setData(dataObj));
    } else {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("No matching country");
          }
        })
        .then((result) => setData(result), setError(""))
        .catch((error) => setError(error), setData([]));
    }
  }, [search]);

  const miniaturesArrayComponent = data.map(function (item) {
    if (region !== "" && region === item.region) {
      return (
        <Miniature
          name={item.name.common}
          population={item.population}
          capital={item.capital}
          region={item.region}
          flag={item.flags.svg}
          key={item.cca3}
          setDetailName={setDetailName}
        />
      );
    } else if (region === "") {
      return (
        <Miniature
          name={item.name.common}
          population={item.population}
          capital={item.capital}
          region={item.region}
          flag={item.flags.svg}
          key={item.cca3}
          setDetailName={setDetailName}
        />
      );
    }
  });

  const detailComponentArray = data.map((item) => {
    if (item.name.common === detailName) {
      return (
        <Detail
          name={item.name.common}
          population={item.population}
          region={item.region}
          subregion={item.subregion}
          capital={item.capital}
          tld={item.tld[0]}
          languages={Object.values(item.languages)}
          setDetailName={setDetailName}
          nativeName={Object.values(item.name.nativeName)[0].official}
        />
      );
    }
  });

  console.log(detailName, data);

  return (
    <div>
      <div className="header">
        <h1>Where is the world?</h1>
        <button>Dark Mode</button>
      </div>
      <Toolbar
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      <div className="miniatures-div">
        {error !== "" ? error.message : miniaturesArrayComponent}
      </div>
      {detailName !== "" && detailComponentArray}
    </div>
  );
}
