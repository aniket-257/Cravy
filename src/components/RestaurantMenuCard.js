import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantMenuCardBody from "./RestaurantMenuCardBody";
import RestaurantMenuCardHeader from "./RestaurantMenuCardHeader";
import useRestaurantMenuCard from "../utils/useRestaurantMenuCard";

const RestaurantMenuCard = () => {
  console.log("RestaurantMenuCard Body start");
  const { resId } = useParams();
  const restroMenuData = useRestaurantMenuCard(resId);

  if (restroMenuData === null) {
    console.log("Shimmmer");
    return <Shimmer />;
  }

  console.log("After Shimmer");
  let menuCard =
    restroMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  menuCard = menuCard?.slice(1, menuCard?.length - 2);
  console.log("MenuCard: ", menuCard);

  return (
    <div className="restro-card">
      <RestaurantMenuCardHeader restroMenuData={restroMenuData} />
      <h3>Menu</h3>
      {menuCard.map((menu, index) => (
        <RestaurantMenuCardBody
          menu={menu}
          key={
            menu?.card?.card?.categoryId ? menu?.card?.card?.categoryId : index
          }
        />
      ))}
    </div>
  );
};
export default RestaurantMenuCard;
