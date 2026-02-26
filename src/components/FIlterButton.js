const FilterButton = ({
  toggleTopRatedButton,
  setToggleTopRatedButton,
  setSearchText,
  listOfRestaurantsFiltered,
  allRestaurants,
  setListOfRestaurantsFiltered,
}) => {
  return (
    <div className="filter">
      <button
        className={`filter-btn ${toggleTopRatedButton ? "active-btn" : ""}`}
        onClick={() => {
          const newValue = !toggleTopRatedButton;
          setToggleTopRatedButton(newValue);
          setSearchText("");
          if (newValue) {
            const filtered = allRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5,
            );
            setListOfRestaurantsFiltered(filtered);
          } else {
            setListOfRestaurantsFiltered(allRestaurants);
          }
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default FilterButton;
