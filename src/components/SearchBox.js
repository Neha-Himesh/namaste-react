import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Whats in your mind?"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      {/* {  console.log(searchFliteredresList);
          return searchFliteredresList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ));} */}
    </div>
  );
};
export default SearchBox;
