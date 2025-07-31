import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 flex justify-between"
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
            <div className="w-3/12 ml-4 flex justify-center items-center">
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
