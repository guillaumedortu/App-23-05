import "./Header.css";

export default function Header(props) {
  const handleThemeSwitch = () => {
    props.setTheme(props.theme === "day" ? "night" : "day");
  };
  return (
    <div className={props.theme === "day" ? "header-day" : "header-night"}>
      <h1 className={props.theme === "day" ? "title-day" : "title-night"}>
        Where is the world?
      </h1>
      <button
        className={
          props.theme === "day" ? "switch-button-day" : "switch-button-night"
        }
        onClick={handleThemeSwitch}
      >
        <i className="fa-solid fa-moon"></i>
        {props.theme === "day" ? " Dark Mode" : " Light Mode"}
      </button>
    </div>
  );
}
