import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddCartItem = (item) => {
    // Dispatch action to add item to cart
    // This function would typically use a Redux action or context to update the cart state
    dispatch(addItem(item)); // Example item, replace with actual item data
    console.log("Item added to cart");
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 flex justify-between shadow"
          >
            <div className="w-9/12">
              <h5>
                {item?.card?.info?.isVeg ? (
                  <span className="p-[1px] border border-green-500">🟢</span>
                ) : (
                  <span className="p-[1px] border border-red-500">🔴</span>
                )}
              </h5>
              <h3>{item?.card?.info?.name}</h3>
              <h3>
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </h3>
              <h5>
                {item?.card?.info?.ratings?.aggregatedRating?.rating +
                  "(" +
                  item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 +
                  ")"}
              </h5>
              <p
                className="ellipsis overflow-hidden text-ellipsis"
                title={item?.card?.info?.description}
              >
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative w-3/12 ml-4 flex justify-center items-center">
              <div className="absolute bg-white text-green-500 font-bold px-3 py-1 rounded-lg bottom-3 left-1/2 -translate-x-1/2 cursor-pointer">
                <button
                  className="cursor-pointer"
                  onClick={() => handleAddCartItem(item)}
                >
                  ADD +
                </button>
              </div>
              <img
                className="rounded-xl w-[90%] h-[90%]"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
