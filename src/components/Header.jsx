// import LogoImg from "./assests/Cravy"; // ! Why Not working ?
import { useState, useContext } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [authLabel, setAuthLabel] = useState("Login"); //* use to re-render component & manipulate Diff changes in DOM using virtual DOM if variable value changes
  const isOnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); // Accessing cart items from Redux store
  // Subscribing to the Redux store to get the updated cart items using useSelector
  console.log("Cart Items:", cartItems);
  return (
    <div className="flex justify-between items-center mx-2 shadow-xl bg-green-100 sticky top-0 z-10">
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
          <li className="font-bold text-lg">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
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
          <li className="px-4 font-bold bg-green-200 rounded-lg">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
