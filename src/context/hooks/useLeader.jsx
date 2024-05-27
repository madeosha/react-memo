import { useContext } from "react";
import { LeaderContext } from "../LeaderContext";

export const useLeaderContext = () => {
  return useContext(LeaderContext);
};
