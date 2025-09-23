import { signOut } from "firebase/auth";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/", { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useNowPlayingMovies();
  return (
    <div>
      <div className="flex justify-between bg-black">
        <div>
          <Header />
        </div>
        <div className="flex items-center">
          <div>
            <img
              className="w-10 rounded-md m-3"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt=""
            />
          </div>
          <div className="m-4">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        </div>
      </div>
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
