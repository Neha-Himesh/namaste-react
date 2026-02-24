import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import SearchBox from "./SearchBox";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <SearchBox />
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const listOfRestaurantsFiltered = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4,
            );
            setListOfRestaurants(listOfRestaurantsFiltered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
