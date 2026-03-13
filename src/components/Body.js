import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import SearchBox from "./SearchBox";
import FilterButton from "./FilterButton";
import Shimmer from "./Shimmer";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [toggleTopRatedButton, setToggleTopRatedButton] = useState(false);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const [
    listOfRestaurantsFiltered,
    allRestaurants,
    setListOfRestaurantsFiltered,
    setAllRestaurants,
  ] = useBody();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  const { loggedInUser, setUserName } = useContext(UserContext);
  //Conditional Rendering
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-search-container flex items-center">
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
        <input
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="restaurant-container flex flex-wrap">
        {listOfRestaurantsFiltered.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>

      {/* Current Swiggy API doesnt have promoted value in the object received from API so I am just including below as a sample if it had promoted value and if we had to add it to the component */}

      {/* <div className="restaurant-container flex flex-wrap">
        {listOfRestaurantsFiltered.map((restaurant) =>
          restaurant.data.promoted ? (
            <RestaurantCardPromoted
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ),
        )}
        </div> */}
    </div>
  );
};
export default Body;
