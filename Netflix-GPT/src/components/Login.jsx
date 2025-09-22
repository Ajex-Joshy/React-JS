import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const firstName = useRef("");
  const lastName = useRef("");
  const emailOrMobNo = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const msg = validateForm(
      firstName.current.value,
      lastName.current.value,
      emailOrMobNo.current.value,
      password.current.value,
      confirmPassword.current.value,
      isSignIn
    );
    setError(msg);
  };

  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative bg-black z-0">
        <img
          className="absolute w-full h-full object-cover scale-125 z-0 hidden sm:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt=""
        />

        <header className="absolute w-full flex items-center z-20">
          <img
            className="w-30 pt-3 pl-2 md:w-50 sm:block lg:w-78 lg:pl-30"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
        </header>
        <div className="flex justify-center w-full h-screen pt-[15vh]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="border absolute z-20 flex flex-col md:w-120 md:bg-black md:p-13 rounded-md"
          >
            <h1 className="text-4xl text-white font-bold m-2 mb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <p className="text-red-500 m-2 text-center">{error}</p>
            {!isSignIn && (
              <>
                <input
                  className="border border-gray-400 shadow-2xl text-white  py-3 pl-4 pr-50 text-left m-2  focus:outline-none focus:ring-white focus:ring-2 rounded-sm"
                  placeholder="First name"
                  type="text"
                  name=""
                  id="firstName"
                  ref={firstName}
                  required
                />
                <input
                  className="border border-gray-400 shadow-2xl text-white  py-3 pl-4 pr-50 text-left m-2  focus:outline-none focus:ring-white focus:ring-2 rounded-sm"
                  placeholder="Last name"
                  type="text"
                  name=""
                  id="lastName"
                  ref={lastName}
                  required
                />
              </>
            )}
            <input
              className="border border-gray-400 shadow-2xl text-white  py-3 pl-4 pr-50 text-left m-2  focus:outline-none focus:ring-white focus:ring-2 rounded-sm"
              placeholder="Email or mobile"
              type="text"
              name=""
              id="emailOrMobNo"
              ref={emailOrMobNo}
              required
            />
            <input
              className="border border-gray-400 shadow-2xl text-white pl-4 pr-50 py-3 text-left m-2 focus:outline-none focus:ring-white focus:ring-2 rounded-sm"
              type="password"
              placeholder="Password"
              name=""
              id="password"
              ref={password}
              required
            />
            {!isSignIn && (
              <input
                className="border border-gray-400 shadow-2xl text-white pl-4 pr-50 py-3 text-left m-2  focus:outline-none focus:ring-white focus:ring-2 rounded-sm"
                type="password"
                placeholder="Confirm password"
                name=""
                id="confirmPassword"
                ref={confirmPassword}
                required
              />
            )}
            <input
              className="bg-red-600 text-white m-2 py-2 cursor-pointer"
              type="submit"
              name=""
              id=""
              value={isSignIn ? "Sign In" : "Sign Up"}
            />
            <p className="text-white text-center underline m-2">
              Forgot Password?
            </p>
            <p className="text-gray-400 m-2 ">
              {isSignIn ? "New to Netflix?" : "Already have an account?"}
              <span
                className="text-white cursor-pointer"
                onClick={() => {
                  setIsSignIn(!isSignIn);
                }}
              >
                {isSignIn ? " Sign up Now" : " Sign In"}
              </span>
            </p>
          </form>
        </div>
        <div className="absolute inset-0 bg-black z-10 w-full h-full opacity-50" />
      </div>
    </div>
  );
};
export default Login;
