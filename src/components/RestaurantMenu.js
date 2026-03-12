import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);
  const { itemCards } =
    resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  return resInfo === null ? <Shimmer /> : <div>Res Category</div>;
  // ) : (
  //   <div className="menu text-center">
  //     {/* <h1>{name}</h1>
  //     <h3>{cuisines.join(", ")}</h3>
  //     <h3>{costForTwoMessage}</h3> */}
  //     <h1 className="font-bold my-6 text-2xl">{name}</h1>
  //     <p className="font-bold text-lg">
  //       {cuisines.join(", ")} - {costForTwoMessage}
  //     </p>
  //     <h2>Menu</h2>
  //     <ul>
  //       {itemCards.map((item) => (
  //         <li key={item.card.info.id}>
  //           {item.card.info.name} - ₹{item.card.info.price / 100}
  //         </li>
  //       ))}
  //     </ul>
  //     {categories.map((category, index) => (
  //       <RestaurantCategory key={category?.card?.card?.title}  data={category?.card?.card} showItems={index === showIndex ? true: false} setShowIndex={()=>setShowIndex(index)} />
  //     ))}
  //   </div>
  // );
};
export default RestaurantMenu;
