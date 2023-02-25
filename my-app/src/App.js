import "./App.css";
import React, { useState, useEffect } from "react";
import Miniature from "./Miniature.js";
import Toolbar from "./Toolbar.js";
import Detail from "./Detail.js";
import Header from "./Header.js";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [region, setRegion] = useState("");
  const [detailName, setDetailName] = useState("");
  const [theme, setTheme] = useState("day");

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
          theme={theme}
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
          theme={theme}
        />
      );
    } else {
      return null;
    }
  });

  const detailComponentArray = data.map((item) => {
    if (item.name.common === detailName) {
      return (
        <Detail
          theme={theme}
          setDetailName={setDetailName}
          setSearch={setSearch}
          name={item.name.common}
          flag={item.flags.svg}
          population={item.population}
          region={item.region}
          subregion={item.subregion}
          capital={item.capital}
          tld={item.tld[0]}
          borders={item.borders ? item.borders : []}
          languages={
            item.languages
              ? Object.values(item.languages).join(" ")
              : "No language"
          }
          nativeName={
            item.name.nativeName
              ? Object.values(item.name.nativeName)[0].official
              : "No native name"
          }
          currencies={
            item.currencies
              ? Object.values(item.currencies)
                  .map((x) => x.name)
                  .join(", ")
              : ["No currencie"]
          }
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      {detailName === "" && (
        <Toolbar
          data={data}
          setData={setData}
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          theme={theme}
        />
      )}

      {detailName === "" && (
        <div
          className={
            theme === "day" ? "miniatures-div-day" : "miniatures-div-night"
          }
        >
          {error !== "" ? (
            <p className={theme === "day" ? "error-day" : "error-night"}>
              {error.message}
            </p>
          ) : (
            miniaturesArrayComponent
          )}
        </div>
      )}

      {detailName !== "" && detailComponentArray}
    </div>
  );
}
