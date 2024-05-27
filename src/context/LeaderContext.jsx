import { createContext, useState } from "react";

export const LeaderContext = createContext(null);

export const LeaderProvider = ({ children }) => {
  const [liderList, setLiderList] = useState([]);

  return <LeaderContext.Provider value={{ liderList, setLiderList }}>{children}</LeaderContext.Provider>;
};
