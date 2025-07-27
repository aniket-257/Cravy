import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenuCard = (resId) => {
  console.log("useRes Body");
  const [restroMenuData, setRestroMenuData] = useState(null);

  useEffect(() => {
    console.log("UseRes UseEffect");
    fetchRestroMenu();
  }, []);

  const fetchRestroMenu = async () => {
    console.log("useRes fetch start");
    let data = await fetch(MENU_API + resId);
    let json = await data.json();
    let restroMenuData = json?.data;
    setRestroMenuData(restroMenuData);
    console.log(restroMenuData);
    console.log("UseRef fetch End");
  };

  console.log("Mid");
  return restroMenuData;
};

export default useRestaurantMenuCard;
