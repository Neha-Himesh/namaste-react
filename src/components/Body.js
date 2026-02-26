import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBox from "./SearchBox";
import FilterButton from "./FilterButton";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurantsFiltered, setListOfRestaurantsFiltered] = useState(
    [],
  );
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [toggleTopRatedButton, setToggleTopRatedButton] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurantsFiltered(restaurants);
    setAllRestaurants(restaurants);
  };

  //Conditional Rendering
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-search-container">
        <SearchBox
          searchText={searchText}
          setSearchText={setSearchText}
          listOfRestaurantsFiltered={listOfRestaurantsFiltered}
          allRestaurants={allRestaurants}
          setListOfRestaurantsFiltered={setListOfRestaurantsFiltered}
          setToggleTopRatedButton={setToggleTopRatedButton}
        />

        <FilterButton
          toggleTopRatedButton={toggleTopRatedButton}
          setToggleTopRatedButton={setToggleTopRatedButton}
          setSearchText={setSearchText}
          listOfRestaurantsFiltered={listOfRestaurantsFiltered}
          allRestaurants={allRestaurants}
          setListOfRestaurantsFiltered={setListOfRestaurantsFiltered}
        />
      </div>

      <div className="restaurant-container">
        {listOfRestaurantsFiltered.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
