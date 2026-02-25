import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBox from "./SearchBox";
import FilterButton from "./FilterButton";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [toggleTopRatedButton, setToggleTopRatedButton] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setAllRestaurants(restaurants);
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        listOfRestaurants={listOfRestaurants}
        allRestaurants={allRestaurants}
        setListOfRestaurants={setListOfRestaurants}
        setToggleTopRatedButton={setToggleTopRatedButton}
      />

      <FilterButton
        toggleTopRatedButton={toggleTopRatedButton}
        setToggleTopRatedButton={setToggleTopRatedButton}
        setSearchText={setSearchText}
        listOfRestaurants={listOfRestaurants}
        allRestaurants={allRestaurants}
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
