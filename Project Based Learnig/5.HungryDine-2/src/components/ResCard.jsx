import { IMAGE_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
const ResCard = ({ resData: { info } }) => {
  console.log(info);
  const { id, name, cuisines, avgRating, costForTwo, cloudinaryImageId } = info;
  return (
    <Link className="link" to={"/restaurant/" + id}>
      <div className="w-60 h-90 bg-gray-200 m-3 rounded-xl hover:bg-gray-300">
        <div className="h-40 w-full overflow-hidden flex justify-center items-center">
          <img
            className="rounded-xl object-cover w-full h-full "
            src={IMAGE_URL + cloudinaryImageId}
          />
        </div>
        <h2 className="font-bold p-3">{name}</h2>
        <h4 className="px-2 font-medium">{cuisines.join(", ")}</h4>
        <h4 className="px-2 py-1">{costForTwo}</h4>
        <h4 className="px-2">{avgRating}</h4>
      </div>
    </Link>
  );
};

export default ResCard;
