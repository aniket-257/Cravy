// import LogoImg from "./assests/Cravy"; // ! Why Not working ?
import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  const [authLabel,setAuthLabel]=useState("Login") // use to re-render component & manipulate Diff changes in DOM using virtual DOM if variable value changes
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_IMG} alt="Cravy Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="authLabel-btn" onClick={()=> authLabel==="Login" ? setAuthLabel("Logout"): setAuthLabel("Login")}>{authLabel}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
