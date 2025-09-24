import { POSTER_CDN } from "../utils/constants";

const Card = ({ path }) => {
  return <img className="m-3 w-40" src={POSTER_CDN + path} alt="" />;
};

export default Card;
