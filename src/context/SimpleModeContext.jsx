import { createContext, useState } from "react";

export const SimpleModeContext = createContext(null);

export const SimpleModeProvider = ({ children }) => {
  const [simpleMode, setSimpleMode] = useState(false);

  const handleSimpleMode = () => {
    setSimpleMode(prevState => !prevState);
  };

  return <SimpleModeContext.Provider value={{ simpleMode, handleSimpleMode }}>{children}</SimpleModeContext.Provider>;
};
