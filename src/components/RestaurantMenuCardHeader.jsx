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
    <div className="w-6/12 bg-gray-100 shadow-lg p-2 rounded-xl m-2">
      <h1 className="font-bold text-2xl mt-16 mb-4">{name}</h1>
      <div className="menu-overview">
        <ul className="font-bold">
          <li>
            {avgRating + " (" + totalRatingsString + ") - " + costForTwoMessage}
          </li>
          <li className="text-green-500 underline">{cuisines?.join(", ")}</li>
          <li>
            Outlet: <span className="font-normal">{locality}</span>
          </li>
          <li>{sla?.slaString}</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenuCardHeader;
