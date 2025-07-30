import { Link } from "react-router-dom";
import RestaurantCard, {
  withPromotedLabel,
  withPromotedLabel,
} from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // * Local state variable => React Super powerful variable
  // * always declare state variable at higher level inside component do not declare it outside of component or inside if, else or any function
  // * Whenever state variable update, React triggers a reconcialation cycle (re-rebder the component)

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // * When We do not mention dependency array in useEffect (It will call after every render)
  // * When we mention empty dependency array [] then it will call after only initial render
  // * When we have state variables as dependency in array then it will call after state variable change

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("React Oppppp!");
    // }, 1000);
    console.log("UseEffect Called");
    fetchData();
    //! we cannot able to use Async function inside useEffect it will give an Error
    //! Cannot return anything apart from function (Which is used for cleaning)
    return () => {
      // clearInterval(timer);
      console.log("Similar to componentWillUnmount");
      // this function is used to clean up things after component unmount
    };
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

  if (!isOnlineStatus) {
    return (
      <h1>Looks like You're offline! Please check your network connection</h1>
    );
  }
  //* Conditional Rendering
  return filteredRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-4 m-4 flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <input
            className="border border-solid border-black p-1 rounded-lg"
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
            className="px-2 py-1 bg-green-100 rounded-lg"
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
        <div className="">
          <button
            className="px-2 py-1 bg-orange-100 rounded-md"
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
      </div>
      <div className="flex flex-wrap justify-center items-start">
        {filteredRestro.map((res) => (
          <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
            {res?.info?.aggregatedDiscountInfoV3?.header?.includes("OFF") ? (
              <RestaurantCardPromoted resObj={res} />
            ) : (
              <RestaurantCard resObj={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
