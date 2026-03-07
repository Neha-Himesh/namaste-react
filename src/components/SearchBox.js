const SearchBox = ({
  searchText,
  setSearchText,
  listOfRestaurantsFiltered,
  allRestaurants,
  setListOfRestaurantsFiltered,
  setToggleTopRatedButton,
}) => {
  return (
    <div className="search-container m-4 p-4">
      <input
        className="border border-black border-solid"
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
