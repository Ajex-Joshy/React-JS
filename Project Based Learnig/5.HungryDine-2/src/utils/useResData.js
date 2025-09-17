import { useEffect, useState } from "react";
import { RES_DATA } from "./constants";

const useResData = () => {
  const [restoList, setRestoList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_DATA);
    const json = await data.json();
    const restos =
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestoList(restos);
  };

  return restoList;
};

export default useResData;
// while making an custom hook, first see what is the contract ie
// what is the input then what is the output set that and then write code
