const RestaurantMenuCardHeader = ({ restroMenuData }) => {
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = restroMenuData?.cards[2]?.card?.card?.info;
  return (
    <>
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
    </>
  );
};

export default RestaurantMenuCardHeader;
