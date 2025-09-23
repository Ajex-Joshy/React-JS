import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { NETFLIX_LOGO } from "../utils/constants.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscrilbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { displayName, email } = user;
        dispatch(addUser({ displayName, email }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => unsubscrilbe();
  }, [navigate, dispatch]);
  return (
    <header className="">
      <img
        className="w-30 pt-3 pl-2 md:w-50 sm:block lg:w-78 lg:pl-30"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />
    </header>
  );
};
export default Header;
