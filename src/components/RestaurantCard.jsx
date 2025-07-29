import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resObj?.info;
  return (
    <div className="p-2 m-2 w-[250px] bg-green-50 rounded-lg hover:outline hover:bg-green-100">
      <img
        className="rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="bold py-2 text-lg">{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
