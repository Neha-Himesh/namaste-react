const FilterButton = ({
  toggleTopRatedButton,
  setToggleTopRatedButton,
  setSearchText,
  listOfRestaurants,
  allRestaurants,
  setListOfRestaurants,
}) => {
  return (
    <div className="filter">
      <button
        className={`filter-btn ${toggleTopRatedButton ? "active-btn" : ""}`}
        onClick={() => {
          const newValue = !toggleTopRatedButton;
          setToggleTopRatedButton(newValue);
          setSearchText("");
          console.log("Inside filter button");
          if (newValue) {
            const filtered = allRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5,
            );
            setListOfRestaurants(filtered);
          } else {
            setListOfRestaurants(allRestaurants);
          }
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default FilterButton;
