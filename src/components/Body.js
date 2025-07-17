import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

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
    setRestaurants(allResList);

    console.log(allResList);
  };

  console.log("Body Component Called");

  if (restaurants.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="body">
      <button
        className="top-restaurants"
        onClick={() => {
          let filteredRes = restaurants.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setRestaurants(filteredRes);
        }}
      >
        Filter Top Restaurant{" "}
      </button>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard resObj={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
