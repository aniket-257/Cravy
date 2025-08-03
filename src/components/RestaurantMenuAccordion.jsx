import { useState } from "react";
import ItemList from "./ItemList";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";

const RestaurantMenuAccordion = ({ data, showItem, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(showItem);
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
  );
};

export default RestaurantMenuAccordion;
