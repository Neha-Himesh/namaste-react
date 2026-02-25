import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [toggleTopRatedButton, setToggleTopRatedButton] = useState(false);
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Whats in your mind?"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setToggleTopRatedButton(false);
            const searchFliteredresList = resList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase()),
            );
            setListOfRestaurants(searchFliteredresList);
          }}
        />
      </div>
      <div className="filter">
        <button
          className={`filter-btn ${toggleTopRatedButton ? "active-btn" : ""}`}
          id="top-rated-btn"
          onClick={() => {
            const newValue = !toggleTopRatedButton;
            setToggleTopRatedButton(!toggleTopRatedButton);
            setSearchText("");
            if (newValue) {
              const listOfRestaurantsFiltered = resList.filter(
                (restaurant) => restaurant.info.avgRating > 4.5,
              );
              setListOfRestaurants(listOfRestaurantsFiltered);
            } else {
              setListOfRestaurants(resList);
            }
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
