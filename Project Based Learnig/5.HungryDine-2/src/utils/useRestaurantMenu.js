import { useEffect, useState } from "react";
import { RES_LINK } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  const fetchData = async () => {
    const data = await fetch(RES_LINK + resId);
    const json = await data.json();
    setResData(json);
  };

  useEffect(() => {
    fetchData();
  }, [resId]);

  return resData;
};

export default useRestaurantMenu;
