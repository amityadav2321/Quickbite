import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import IMG_URL from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantsCard = json.data.cards.find(
      (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const restaurantInfos = restaurants.map((r) => r.info);

    setResList(restaurantInfos);
    setFilterRestaurant(restaurantInfos);
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus === false) return <h1>Looking like you are offline!!! Please check your internet connection.</h1>

  if (resList.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-6">
        {[...Array(8)].map((_, i) => (
          <Shimmer key={i} />
        ))}
      </div>
    );
  }

  return (
    <>
      
      <div className="flex items-center justify-between px-4 py-4 flex-wrap gap-4">
       
        <div className="flex-1 flex justify-center ml-50">
          <input
            type="text"
            className="border border-green-600 rounded-2xl px-40 py-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            className="ml-2 bg-white text-green-600 border border-green-500 hover:bg-green-200 px-4 py-2 rounded-md font-semibold cursor-pointer"
            onClick={() => {
              const filtered = resList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="bg-white text-green-600 border border-green-500 hover:bg-green-200 px-4 py-2 rounded-md font-semibold cursor-pointer"
            onClick={() => {
              const topRated = resList.filter((res) => res.avgRating >= 4.5);
              setFilterRestaurant(topRated);
            }}
          >
            ⭐ Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-6">
          {filterRestaurant.map((restaurant) => (
            <Link key={restaurant.id} to={"/restaurants/"+restaurant.id}><RestroCard
              
              name={restaurant.name}
              image={IMG_URL + restaurant.cloudinaryImageId}
              locality={restaurant.locality}
              avgRating={restaurant.avgRating}
              time={restaurant.sla?.deliveryTime}
              cuisines={restaurant.cuisines.join(", ")}
            /></Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
