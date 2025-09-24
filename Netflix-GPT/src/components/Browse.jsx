import { signOut } from "firebase/auth";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import useMovieList from "../hooks/useMovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useState } from "react";
import GptSearch from "./GptSearch";
import SUPPORTED_LANGUAGES from "../utils/supportedLanguages";
import { setLang } from "../utils/appConfig";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gptSearch, setGptSearch] = useState(false);
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

  useMovieList();
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex justify-between w-full bg-gradient-to-b from-black absolute z-50">
        <div>
          <Header />
        </div>
        <div className="flex items-center">
          {!gptSearch && (
            <div className="m-4">
              <select
                className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none "
                name=""
                id=""
                onChange={(e) => dispatch(setLang(e.target.value))}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="m-4">
            <button
              className="bg-purple-500 text-white px-3 py-1 rounded-md cursor-pointer"
              onClick={() => setGptSearch(!gptSearch)}
            >
              {gptSearch ? "GPT Search" : "Home"}
            </button>
          </div>
          <div>
            <img
              className="w-10 rounded-md m-3 hidden md:block"
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
      {gptSearch ? (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      ) : (
        <GptSearch />
      )}
    </div>
  );
};

export default Browse;
