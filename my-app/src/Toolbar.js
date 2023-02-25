import "./Toolbar.css";
import React, { useState } from "react";

export default function Toolbar(props) {
  const [displayed, setDisplayed] = useState("deroulant-off");

  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };
  console.log(props.region);

  return (
    <div className={props.theme === "day" ? "toolbar-day" : "toolbar-night"}>
      <div
        className={
          props.theme === "day" ? "search-bar-day" : "search-bar-night"
        }
      >
        <span
          className={
            props.theme === "day" ? "search-icon-day" : "search-icon-night"
          }
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          onChange={handleChange}
          className={
            props.theme === "day" ? "search-input-day" : "search-input-night"
          }
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="regions">
        <div
          className={"deroulant-div"}
          onMouseEnter={() => setDisplayed("deroulant-on")}
          onMouseLeave={() => setDisplayed("deroulant-off")}
        >
          <div
            className={
              props.theme === "day" ? "filter-div-day" : "filter-div-night"
            }
          >
            <p className="filter-text">Filter by region</p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <ul
            className={
              props.theme === "day" ? displayed + "-day" : displayed + "-night"
            }
          >
            <li
              className={
                props.theme === "day" ? "region-all-day" : "region-all-night"
              }
              onClick={() => {
                props.setRegion("");
                props.handleMap();
              }}
            >
              All
            </li>
            <li
              className={props.theme === "day" ? "region-day" : "region-night"}
              onClick={() => props.setRegion("Africa")}
            >
              Africa
            </li>
            <li
              className={props.theme === "day" ? "region-day" : "region-night"}
              onClick={() => props.setRegion("Americas")}
            >
              Americas
            </li>
            <li
              className={props.theme === "day" ? "region-day" : "region-night"}
              onClick={() => props.setRegion("Asia")}
            >
              Asia
            </li>
            <li
              className={props.theme === "day" ? "region-day" : "region-night"}
              onClick={() => props.setRegion("Europe")}
            >
              Europe
            </li>
            <li
              className={props.theme === "day" ? "region-day" : "region-night"}
              onClick={() => props.setRegion("Oceania")}
            >
              Oceania
            </li>
            <li
              className={props.theme === "day" ? "region-day" : "region-night"}
              onClick={() => props.setRegion("Antarctic")}
            >
              Antartic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
