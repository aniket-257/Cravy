// import LogoImg from "./assests/Cravy"; // ! Why Not working ?
import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [authLabel, setAuthLabel] = useState("Login"); //* use to re-render component & manipulate Diff changes in DOM using virtual DOM if variable value changes
  const isOnlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center m-2 shadow-xl bg-green-100">
      <div className="w-28">
        <Link to="/">
          <img className="logo" src={LOGO_IMG} alt="Cravy Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 gap-10">
          <li>Online Status: {isOnlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Groceries</Link>
          </li>
          <button
            className="authLabel-btn"
            onClick={() =>
              authLabel === "Login"
                ? setAuthLabel("Logout")
                : setAuthLabel("Login")
            }
          >
            {authLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
