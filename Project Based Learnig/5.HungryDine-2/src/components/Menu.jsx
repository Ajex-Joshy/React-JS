import { IMAGE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  if (!resData) {
    return <Shimmer />;
  }
  const menu =
    resData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  const resInfo = resData?.data?.cards[2]?.card?.card?.info;

  const { name, cuisines, city, avgRating, areaName } = resInfo;
  return (
    <div className="menu-card">
      <div className="text-center">
        <h1 className="font-bold text-4xl py-5">{name + " - " + city}</h1>
      </div>

      <h3 className="text-center text-xl">{"cuisines - " + cuisines}</h3>
      <div>
        <h4 className="text-center text-xl">{"rating - " + avgRating}</h4>
        <h4 className="text-center text-xl">{"place: " + areaName}</h4>
      </div>
      <div className="menu-container">
        <h3 className="text-center font-semibold text-2xl py-4">Menu items</h3>
        <ul>
          {menu?.map((items) => {
            const {
              card: {
                info: { id, name, defaultPrice, imageId, price },
              },
            } = items;
            const amount = price || defaultPrice;
            console.log(id, name, defaultPrice, imageId);
            return (
              <div key={id} className="flex items-center p-4">
                <div>
                  {imageId ? (
                    <img
                      className="w-50 rounded-xl"
                      src={IMAGE_URL + imageId}
                      alt=""
                    />
                  ) : (
                    <div className="w-50 h-32"></div>
                  )}
                </div>
                <h5 className="font-semibold px-4">
                  {name + " - ₹" + amount / 100}
                </h5>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

// As per single responsibility principle a component should have only one responsibility
// if we see here the Menu card has 2 responsibilities 1. fetching data and 2. displaying data
// so what we will do in the sense we will create an custom hook for fetching data and it will return the
// the data. so the Menu component only needs to take responsibiliy of displayin data

// so custom hook is basically a utility or a helper fucnction. hence we will write it utils folder
// with name same as hook name also name of hook should start with use
