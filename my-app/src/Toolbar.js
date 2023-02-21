import "./Toolbar.css";
import React, { useState } from "react";

export default function Toolbar(props) {
  const [displayed, setDisplayed] = useState("deroulant-off");

  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };
  console.log(props.region);

  return (
    <div className="toolbar">
      <input onChange={handleChange} className="search"></input>
      <div className="regions">
        <div
          onMouseEnter={() => setDisplayed("deroulant-on")}
          onMouseLeave={() => setDisplayed("deroulant-off")}
        >
          <p>Filter by region</p>
          <ul className={displayed}>
            <li
              className="region-all"
              onClick={() => {
                props.setRegion("");
                props.handleMap();
              }}
            >
              All
            </li>
            <li className="region" onClick={() => props.setRegion("Africa")}>
              Africa
            </li>
            <li className="region" onClick={() => props.setRegion("Americas")}>
              Americas
            </li>
            <li className="region" onClick={() => props.setRegion("Asia")}>
              Asia
            </li>
            <li className="region" onClick={() => props.setRegion("Europe")}>
              Europe
            </li>
            <li className="region" onClick={() => props.setRegion("Oceania")}>
              Oceania
            </li>
            <li className="region" onClick={() => props.setRegion("Antarctic")}>
              Antartic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
