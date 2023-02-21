import "./Detail.css";

export default function Detail(props) {
  const handleBack = () => {
    props.setDetailName("");
  };
  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <img></img>
        <div className="infos">
          <div className="infos-1">
            <h2>{props.name}</h2>
            <p>Native Name: {props.nativeName}</p>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Sub Region: {props.subregion}</p>
            <p>Capital: {props.capital}</p>
          </div>
          <div className="infos-2">
            <p>Top Level Domain: {props.tld}</p>
            <p>Currencies: {props.currencies}</p>
            <p>Languages: {props.languages}</p>
          </div>
          <div className="borders">Border countries:</div>
        </div>
      </div>
    </div>
  );
}
