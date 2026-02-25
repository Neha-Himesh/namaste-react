const SearchBox = ({
  searchText,
  setSearchText,
  listOfRestaurants,
  allRestaurants,
  setListOfRestaurants,
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

          setListOfRestaurants(filtered);
        }}
      />
    </div>
  );
};

export default SearchBox;
