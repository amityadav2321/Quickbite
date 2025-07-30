import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";
import Shimmer1 from "./Shimmer1";
import { useDispatch } from "react-redux";
import { addItems } from "../../reduxtoolkit/cartSlice";

function RestaurantMenu() {
  
  const { resId } = useParams();
  const resInfo = useRestraurantMenu(resId);

  
  const dispatch=useDispatch();
  const handleItems=(item)=>{
    dispatch(addItems(item));
  }

  if (resInfo === null) return <Shimmer1 />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const menuCard = regularCards.find((c) => c?.card?.card?.itemCards);
  const itemCards = menuCard?.card?.card?.itemCards || [];
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
    
      <h1 className="text-3xl font-bold mb-1">{name}</h1>
      <p className="text-gray-600 mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      
      <div className="mb-6">
        <div
          className="inline-block px-5 py-2 border-b-4 border-green-500 text-xl font-semibold text-gray-800 rounded-t-md shadow-sm hover:shadow-md transition"
          title="Scroll to Menu"
        >
          🍽️ Menu
        </div>
      </div>

      {itemCards.length === 0 ? (
        <p className="text-gray-500">No menu items available.</p>
      ) : (
        <div className="space-y-6">
          {itemCards.map((item) => {
            const info = item.card.info;
            const price = (info.price || info.defaultPrice) / 100;
            const imgUrl = info.imageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fill/${info.imageId}`
              : "https://via.placeholder.com/208?text=No+Image";

            return (
              <div
                key={info.id}
                className="flex justify-between bg-white shadow-sm hover:shadow-md cursor-pointer transition p-4 rounded-lg border border-gray-200"
              >
               
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {info.name}
                  </h3>

               
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-gray-700 font-semibold text-base">
                      ₹{price}
                    </span>
                  </div>

                 
                  {info.ratings && info.ratings.aggregatedRating?.rating && (
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="text-green-600 font-semibold text-sm">
                        ★ {info.ratings.aggregatedRating.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({info.ratings.aggregatedRating.ratingCountV2})
                      </span>
                    </div>
                  )}

                  {info.description && (
                    <p className="text-gray-500 text-sm mt-1">
                      {info.description}
                    </p>
                  )}
                </div>
                <div className="relative w-32 h-32 flex-shrink-0">
                  <img
                    src={imgUrl}
                    alt={info.name}
                    className="w-full h-full object-cover rounded-md border"
                  />
                  <button
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-4 py-1 text-sm rounded-full border border-green-600 hover:bg-green-600 hover:text-white transition-colors"
                    onClick={()=>handleItems(item)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default RestaurantMenu;
