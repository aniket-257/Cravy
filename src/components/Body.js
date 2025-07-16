import RestaurantCard from "./RestaurantCard";
import allResList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(allResList);

  return (
    <div className="body">
      <button
        className="top-restaurants"
        onClick={() => {
          let filteredRes = allResList.filter(
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
