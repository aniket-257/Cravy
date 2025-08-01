import { useState } from "react";
import ItemList from "./ItemList";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";

const RestaurantMenuAccordion = ({ data, showItem, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false); // uncontrolled to controlled Component
  const handleItemList = () => {
    // setShowItems(!showItems);
    setShowIndex(); // Parent's Set method
  };
  return (
    <div className="w-6/12">
      {/* {Headers} */}
      <div className=" bg-gray-50 shadow-lg my-4 p-3" onClick={handleItemList}>
        <div className="flex justify-between cursor-pointer">
          <span className="text-lg font-bold">
            {data?.title + " (" + data?.itemCards?.length + ") "}
          </span>
          <span className="text-xl">⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
    // <div className="category-cards">
    //   <h2>
    //     {menu?.card?.card?.title +
    //       " (" +
    //       menu?.card?.card?.itemCards?.length +
    //       ") "}
    //   </h2>

    //   {menu?.card?.card?.itemCards?.map((menuInfo, index) => (
    //     <RestaurantCategoryMenu
    //       menuInfo={menuInfo}
    //       key={menuInfo?.card?.info?.id ? menuInfo?.card?.info?.id : index}
    //     />
    //   ))}
    // </div>
  );
};

export default RestaurantMenuAccordion;
