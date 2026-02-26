const SearchBox = ({
  searchText,
  setSearchText,
  listOfRestaurantsFiltered,
  allRestaurants,
  setListOfRestaurantsFiltered,
  setToggleTopRatedButton,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Whats in your mind?"
        value={searchText}
        onChange={(e) => {
          const value = e.target.value;
          setSearchText(value);
          setToggleTopRatedButton(false);

          const filtered = allRestaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(value.toLowerCase()),
          );

          setListOfRestaurantsFiltered(filtered);
        }}
      />
    </div>
  );
};

export default SearchBox;
