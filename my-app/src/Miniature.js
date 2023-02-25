import "./Miniature.css";

export default function Miniature(props) {
  const handleDetail = () => {
    props.setDetailName(props.name);
  };

  return (
    <div
      className={
        props.theme === "day" ? "miniature-item-day" : "miniature-item-night"
      }
      onClick={handleDetail}
    >
      <img alt="flag of all countries" className="flag" src={props.flag}></img>
      <div className="country-text">
        <p className="country-name">{props.name}</p>
        <p className="country-details">
          <span className="country-props">Population</span> : {props.population}
        </p>
        <p className="country-details">
          <span className="country-props">Region</span> : {props.region}
        </p>
        <p className="country-details">
          <span className="country-props">Capital</span> : {props.capital}
        </p>
      </div>
    </div>
  );
}
