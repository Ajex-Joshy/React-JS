import { createContext } from "react";

const UserContext = createContext({
  id: 0,
  name: "unknown",
  age: 0,
});

export default UserContext;
