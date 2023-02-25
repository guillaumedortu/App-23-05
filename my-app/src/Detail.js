import { useEffect, useState } from "react";
import "./Detail.css";

export default function Detail(props) {
  const [borderData, setBorderData] = useState([]);
  const handleBack = () => {
    props.setDetailName("");
    props.setSearch("");
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,alpha3Code")
      .then((result) => result.json())
      .then((data) => setBorderData(data));
  }, []);

  const borderss = props.borders.map((item) => {
    const borderArray = borderData.map((x) => {
      if (x.alpha3Code === item) {
        return (
          <p
            className={
              props.theme === "day"
                ? "border-country-day"
                : "border-country-night"
            }
          >
            {x.name}
          </p>
        );
      } else {
        return null;
      }
    });
    return borderArray;
  });

  console.log(borderss);

  return (
    <div
      className={
        props.theme === "day" ? "detail-global-day" : "detail-global-night"
      }
    >
      <button
        className={
          props.theme === "day" ? "back-button-day" : "back-button-night"
        }
        onClick={handleBack}
      >
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      <div
        className={
          props.theme === "day" ? "detail-country-day" : "detail-country-night"
        }
      >
        <img
          alt="flag of the country"
          className={
            props.theme === "day" ? "detail-flag-day" : "detail-flag-night"
          }
          src={props.flag}
        ></img>
        <div className="info-global">
          <h2 className="country-name">{props.name}</h2>
          <div className="infos-text">
            <div className="infos-1">
              <p className="info-description">
                Native Name:{" "}
                <span className="info-data">{props.nativeName}</span>
              </p>
              <p className="info-description">
                Population:{" "}
                <span className="info-data">{props.population}</span>
              </p>

              <p className="info-description">
                Region: <span className="info-data">{props.region}</span>
              </p>
              <p className="info-description">
                Sub Region: <span className="info-data">{props.subregion}</span>
              </p>
              <p className="info-description">
                Capital: <span className="info-data">{props.capital}</span>{" "}
              </p>
            </div>
            <div className="infos-2">
              <p className="info-description">
                Top Level Domain: <span className="info-data">{props.tld}</span>{" "}
              </p>
              <p className="info-description">
                Currencies:{" "}
                <span className="info-data">{props.currencies}</span>
              </p>
              <p className="info-description">
                Languages: <span className="info-data">{props.languages}</span>
              </p>
            </div>
          </div>
          <div className="borders">
            <p className="border-description">Border countries: </p>
            {borderss.length === 0 ? (
              <p
                className={
                  props.theme === "day"
                    ? "border-country-day"
                    : "border-country-night"
                }
              >
                No border country
              </p>
            ) : (
              borderss
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
