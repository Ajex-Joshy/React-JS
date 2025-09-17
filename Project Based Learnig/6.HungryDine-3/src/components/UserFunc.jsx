import { useEffect, useState } from "react";

const UserFunc = ({ type, name, place, avatar_url }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("function timer");
    }, 1500);

    return () => {
      clearInterval(timerId);
    }; // will executes when the component unmnounts
  });
  return (
    <div className="border-black border-2 border-solid p-4 m-4 w-100">
      <p>{type}</p>
      <img className="w-40 rounded-full p-4 mx-auto" src={avatar_url} alt="" />
      <h1>Name: {name}</h1>
      <h2>Place: {place}</h2>
      <h4
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Count-1: {count1}
      </h4>
      <h4
        onClick={() => {
          setCount1(count1 + 1);
          setCount2(count2 + 1);
        }}
      >
        Count-2: {count2}
      </h4>
    </div>
  );
};

export default UserFunc;
