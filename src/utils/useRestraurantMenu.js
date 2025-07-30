import { useEffect, useState } from "react";

const useRestraurantMenu=( resId )=>{

    const [resInfo, setResInfo]=useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
   

    setResInfo(json.data);

    }

    return resInfo;
}


export default useRestraurantMenu;
