import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";
import RestaurantMenuCardHeader from "./RestaurantMenuCardHeader";
import useRestaurantMenuCard from "../utils/useRestaurantMenuCard";
import { useState } from "react";

const RestaurantMenuCard = () => {
  console.log("RestaurantMenuCard Body start");
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const restroMenuData = useRestaurantMenuCard(resId);

  if (restroMenuData === null) {
    console.log("Shimmmer");
    return <Shimmer />;
  }

  console.log("After Shimmer");
  let menuCard =
    restroMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  menuCard = menuCard?.filter(
    (cat) =>
      cat?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("MenuCard: ", menuCard);

  return (
    <div className="flex flex-col items-center ">
      <RestaurantMenuCardHeader restroMenuData={restroMenuData} />
      <h3>Menu</h3>
      {menuCard.map((menu, index) => (
        <RestaurantMenuAccordion
          data={menu?.card?.card}
          key={
            menu?.card?.card?.categoryId ? menu?.card?.card?.categoryId : index
          }
          showItem={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenuCard;
