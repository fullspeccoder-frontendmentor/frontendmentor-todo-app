import { ReactComponent as SunIcon } from "../../resources/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../resources/icon-moon.svg";

const NavBar = ({ theme, onThemeToggle }) => {
  return (
    <>
      <img src="bg-mobile-dark.jpg" alt="cityscape" />
      <div className="NavBar">
        <h1>todo</h1>
        {theme === "dark" && <SunIcon onClick={onThemeToggle} />}
        {theme === "light" && <MoonIcon onClick={onThemeToggle} />}
      </div>
    </>
  );
};

export default NavBar;
