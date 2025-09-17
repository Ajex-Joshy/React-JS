import { IMAGE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Category from "./Category";

const Menu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  if (!resData) {
    return <Shimmer />;
  }
  const resInfo = resData?.data?.cards[2]?.card?.card?.info;
  const {
    name,
    cuisines,
    city,
    avgRating,
    areaName,
    totalRatingsString,
    costForTwoMessage,
    avgRatingString,
  } = resInfo;
  const cat =
    resData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mt-44">
      <div className="w-6/12 mx-auto">
        <p className="text-[11px] text-gray-400">
          Home / Kochi / <span className="text-black">{name}</span>
        </p>
        <h1 className="font-bold text-3xl py-5">{name}</h1>
        <div className=" py-7 mb-15 mt-4 rounded-3xl bg-white p-3 border-b-15 border-gray-300 border-l-15 border-r-15 border-t-2">
          <h4 className="text-left font-semibold">
            {avgRating} ({totalRatingsString}) &#183; {costForTwoMessage}
          </h4>
          <h3 className="text-left text-red-500 underline pt-1">
            {cuisines.join(", ")}
          </h3>
          <h4 className="text-left pt-3">
            Outlet{" "}
            <span className="text-gray-400 text-sm ml-3">{areaName}</span>
          </h4>
        </div>
      </div>
      <div>
        <Category cat={cat} />
      </div>
    </div>
  );
};

export default Menu;
