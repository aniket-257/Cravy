import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("UseEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // optional Chaining
    const allResList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(allResList);
    setFilteredRestro(allResList);

    console.log(allResList);
  };

  console.log("Body Component Called");

  // Conditional Rendering
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }

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
          <RestaurantCard resObj={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
