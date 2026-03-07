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
        className={`filter-btn px-4 m-4 py-2 rounded-lg ${toggleTopRatedButton ? "bg-cyan-900  text-white" : " bg-green-100"}`}
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
