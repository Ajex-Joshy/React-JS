import { IMAGE_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const ResCard = ({ resData: { info } }) => {
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } = info;
  return (
    <div data-testid="res-card" className="">
      <Link className="link" to={"/restaurant/" + id}>
        <div className="w-65 h-90 m-3 rounded-xl hover:bg-gray-300">
          <div className="w-65 h-43  overflow-hidden flex justify-center items-center shadow-lg">
            <img
              className="rounded-2xl object-cover w-full h-full "
              src={IMAGE_URL + cloudinaryImageId}
            />
          </div>
          <h2 className="font-bold p-3 ">{name}</h2>
          <h4 className="px-2 font-medium">{cuisines.join(", ")}</h4>
          <h4 className="px-2 py-1">{costForTwo}</h4>
          <h4 className="px-2">{avgRating}</h4>
        </div>
      </Link>
    </div>
  );
};

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-black px-2.5 py-1 rounded-sm m-1 font-medium">
          promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default ResCard;
