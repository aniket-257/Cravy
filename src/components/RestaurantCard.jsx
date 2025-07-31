import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resObj?.info;
  return (
    <div className="flex flex-col  p-2 m-2 w-[250px] rounded-lg hover:outline hover:bg-green-50">
      <div className="">
        <img
          className="rounded-2xl"
          alt="res-img"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h3 className="bold py-2 text-lg">{name}</h3>
        <h4>{avgRating} Stars</h4>
        <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute font-bold  px-4 py-1 m-0.5 rounded-xl bg-green-100">
          {props?.resObj?.info?.aggregatedDiscountInfoV3?.header}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
