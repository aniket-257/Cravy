import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  // * Local state variable => React Super powerful variable
  // * always declare state variable at higher level inside component do not declare it outside of component or inside if, else or any function
  // * Whenever state variable update, React triggers a reconcialation cycle (re-rebder the component)

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  // * When We do not mention dependency array in useEffect (It will call after every render)
  // * When we mention empty dependency array [] then it will call after only initial render
  // * When we have state variables as dependency in array then it will call after state variable change

  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //* optional Chaining
    const allResList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(allResList);
    setFilteredRestro(allResList);

    console.log(allResList);
  };

  console.log("Body Component Called");

  //* Conditional Rendering
  return filteredRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            placeholder="search here..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (!e.target.value) {
                setFilteredRestro(allRestaurants);
              }
            }}
          />
          <button
            onClick={() => {
              let searchFilteredRestro = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestro(searchFilteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-restaurants"
          onClick={() => {
            let filteredRes = allRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestro(filteredRes);
          }}
        >
          Filter Top Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {filteredRestro.map((res) => (
          <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
            <RestaurantCard resObj={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
