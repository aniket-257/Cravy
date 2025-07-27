import { CDN_URL } from "../utils/constants";
const RestaurantCategoryMenu = ({ menuInfo }) => {
  return (
    <div className="res-menu-card">
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
            menuInfo?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 +
            ")"}
        </h5>
        <p className="res-cuisines">{menuInfo?.card?.info?.description}</p>
      </div>
      <img src={CDN_URL + menuInfo?.card?.info?.imageId} />
    </div>
  );
};

export default RestaurantCategoryMenu;
