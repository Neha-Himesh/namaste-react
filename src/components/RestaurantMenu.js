import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
