const FilterButton = ({
  toggleTopRatedButton,
  setToggleTopRatedButton,
  setSearchText,
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

          if (newValue) {
            const filtered = resList.filter(
              (restaurant) => restaurant.info.avgRating > 4.5,
            );
            setListOfRestaurants(filtered);
          } else {
            setListOfRestaurants(resList);
          }
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default FilterButton;
