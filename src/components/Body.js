import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBox from "./SearchBox";
import FilterButton from "./FilterButton";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [toggleTopRatedButton, setToggleTopRatedButton] = useState(false);

  return (
    <div className="body">
      <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        setListOfRestaurants={setListOfRestaurants}
        setToggleTopRatedButton={setToggleTopRatedButton}
      />

      <FilterButton
        toggleTopRatedButton={toggleTopRatedButton}
        setToggleTopRatedButton={setToggleTopRatedButton}
        setSearchText={setSearchText}
        setListOfRestaurants={setListOfRestaurants}
      />

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
