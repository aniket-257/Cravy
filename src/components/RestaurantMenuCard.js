import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenuCard = () => {
  const [restroMenuData, setRestroMenuData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchRestroMenu();
  }, []);

  const fetchRestroMenu = async () => {
    let data = await fetch(MENU_API + resId);
    let json = await data.json();
    let restroMenuData = json?.data;
    setRestroMenuData(restroMenuData);
    console.log(restroMenuData);
  };

  if (restroMenuData === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = restroMenuData?.cards[2]?.card?.card?.info;

  let menuCard =
    restroMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  menuCard = menuCard?.slice(1, menuCard?.length - 2);
  console.log("MenuCard: ", menuCard);

  return (
    <div className="restro-card">
      <h1>{name}</h1>
      <div className="menu-overview">
        <ul>
          <li>
            {avgRating + " (" + totalRatingsString + ") - " + costForTwoMessage}
          </li>
          <li>{cuisines?.join(", ")}</li>
          <li>Outlet: {locality}</li>
          <li>Delivery Time: {sla?.slaString}</li>
        </ul>
      </div>
      <h3>Menu</h3>
      {menuCard.map((menu) => {
        return (
          <div key={menu?.card?.card?.categoryId} className="category-cards">
            <h2>
              {menu?.card?.card?.title +
                " (" +
                menu?.card?.card?.itemCards?.length +
                ") "}
            </h2>

            {menu?.card?.card?.itemCards?.map((menuInfo, index) => {
              return (
                <div
                  key={
                    menuInfo?.card?.info?.id ? menuInfo?.card?.info?.id : index
                  }
                  className="res-menu-card"
                >
                  <div>
                    <h5>{menuInfo?.card?.info?.isVeg ? "Veg" : "Non-Veg"}</h5>
                    <h3>{menuInfo?.card?.info?.name}</h3>
                    <h3>
                      ₹
                      {menuInfo?.card?.info?.defaultPrice / 100 ||
                        menuInfo?.card?.info?.price / 100}
                    </h3>
                    <h5>
                      {menuInfo?.card?.info?.ratings?.aggregatedRating?.rating +
                        "(" +
                        menuInfo?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2 +
                        ")"}
                    </h5>
                    <p className="res-cuisines">
                      {menuInfo?.card?.info?.description}
                    </p>
                  </div>
                  <img src={CDN_URL + menuInfo?.card?.info?.imageId} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCard;
