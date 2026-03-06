import React from "react";
import { useEffect, useState } from "react";
import { RESTAURANTS_LIST_API } from "./constants";
const useBody = () => {
  const [listOfRestaurantsFiltered, setListOfRestaurantsFiltered] = useState(
    [],
  );
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restaurants);
    setListOfRestaurantsFiltered(restaurants);
  };
  return [
    listOfRestaurantsFiltered,
    allRestaurants,
    setListOfRestaurantsFiltered,
    setAllRestaurants,
  ];
};
export default useBody;
