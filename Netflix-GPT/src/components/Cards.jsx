import { POSTER_CDN } from "../utils/constants";

const Card = ({ path }) => {
  console.log(POSTER_CDN + path);
  return (
    <div>
      <img src={POSTER_CDN + path} alt="" />
    </div>
  );
};

export default Card;
