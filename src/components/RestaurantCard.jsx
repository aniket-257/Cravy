import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resObj?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
