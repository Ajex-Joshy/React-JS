import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import useResData from "../utils/useResData.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

// lets implement a filter feature while clicking Top Resturants it will show restaurants with rating greter
// than 4
// so we need to update our dom, lets first see how the dom is rendered
// first by default we send data of restaurants in variable data and the data is used
// while clicking btn the data should contain filtered data (js filter method)
// if we update the data with the filered data the data will be there but the dom will not re render it
// so we need that if any data or state is changed we need to render the dom
// for that we can make a state variable using useState hook
// To see more about hooks, useState go to theory.html
// So if any data or state changes in the state variable it automatically rerenders the dom and show the
// updated results

const Body = () => {
  const list = useResData();
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const resList = list;
  console.log(list);
  useEffect(() => {
    if (list) setFilteredRes(list);
  }, [list]);

  if (!useOnlineStatus())
    return (
      <h1 className="text-2xl font-bold p-5">
        Seems you are ofline. please check your internet connection
      </h1>
    );
  // Conditional Rendering (for shimmer UI)
  // if (resList.length !== 0) {
  //     return <Shimmer/>
  // }
  return resList === null ? (
    <Shimmer /> // we used ternary operator
  ) : (
    <div>
      <div className=" flex my-10">
        <div>
          <button
            className="mx-10 py-1 px-3 bg-green-400 rounded-sm"
            onClick={() => {
              let topRes = resList.filter((res) => res.info.avgRating > 4.5);
              setFilteredRes(topRes);
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="search-container mb">
          <input
            type="text"
            className="border-2 border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="  search restaurant.."
          />
          <button
            className="mx-3 rounded-sm bg-green-400 px-3 py-1"
            onClick={() => {
              const filterRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filterRes);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <ResCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
