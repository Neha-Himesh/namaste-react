import { useEffect, useState } from "react";
import resMenu from "../utils/MockDataRestaurantMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const data = resMenu;
  setResInfo(data);

  // const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
  //   resInfo?.data?.cards[2]?.card?.card?.info;
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {/* <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3> */}
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
