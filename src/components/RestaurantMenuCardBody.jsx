import RestaurantCategoryMenu from "./RestaurantCategoryMenu";

const RestaurantMenuCardBody = ({ menu }) => {
  return (
    <div className="category-cards">
      <h2>
        {menu?.card?.card?.title +
          " (" +
          menu?.card?.card?.itemCards?.length +
          ") "}
      </h2>

      {menu?.card?.card?.itemCards?.map((menuInfo, index) => (
        <RestaurantCategoryMenu
          menuInfo={menuInfo}
          key={menuInfo?.card?.info?.id ? menuInfo?.card?.info?.id : index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuCardBody;
