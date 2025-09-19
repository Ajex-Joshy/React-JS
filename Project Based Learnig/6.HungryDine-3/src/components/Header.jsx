import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [headerBtn, setHeaderBtn] = useState("Login");
  const data = useContext(UserContext);
  const { name } = useContext(UserContext);

  // subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  // whenever the cart.items gets modified cardItems get modified
  return (
    <div className="flex h-30 items-center justify-between fixed bg-white w-full top-0 z-1">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-5">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-5">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-5">
            <a href="/contact">Contact Us</a>
          </li>
          <li className="px-5">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li className="px-5">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
          <li className="px-5">
            status: {useOnlineStatus() === true ? "🟢" : "🔴"}
          </li>
          <li className="px-5">Welcome {name} 🙏</li>
          <button
            className="px-5 py-1 bg-blue-500 rounded-sm mr-10 text-white cursor-pointer"
            onClick={() => {
              headerBtn === "Login"
                ? setHeaderBtn("Logout")
                : setHeaderBtn("Login");
            }}
          >
            {headerBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// so if we update a state variable here headerBtn the entire component re renders (header)
// after rendering react builds the entire JSX tree returned from the Header()
// so the whole Header component re rendered but it will not re render the entire dom in the browser
// React builds a new virtual DOM tree for the updated Header
// React compares it with the previous virtual DOM (this is called reconciliation)
// React finds the differnce
// •	Before: <button>Login</button>
// •	After: <button>Logout</button>
// React updates only the changed part in the real dom (the text inside the button)
// Because React uses a Virtual DOM + Diffing Algorithm (React Fiber)
