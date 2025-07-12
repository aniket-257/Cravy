import React from "react";
import ReactDOM from "react-dom/client";
// import LogoImg from "./assests/Cravy"; // ! Why Not working ?

/**
 * Header
 *  - Logo
 *  - Nav Bar
 * Body
 *  - Search Bar
 *  - RestaurantContainer
 *      - RestroCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://raw.githubusercontent.com/aniket-257/React/refs/heads/main/assets/CravyTransparent.png"
          alt="Cravy Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/d37a7eaf-9044-4187-a761-87bbec10f1e6_14781.JPG"
      />
      <h3 className="res-name">Pizza Hutttttttttttttttttttttttttttt</h3>
      <h3 className="res-details">4.2 Stars - 30 mins</h3>
      <h3 className="res-cuisines">
        Pizzas, Biryani, north indian, chinese Pizzas, Biryani, north indian,
        chinese
      </h3>
      <h3 className="res-details">Wakad</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // React Element Rendering Syntax
root.render(<AppLayout />); // React Component Rendering Syntax
