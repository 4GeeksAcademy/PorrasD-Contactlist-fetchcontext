import React, { createContext, useState } from "react";
import getState from "./flux";

export const AppContext = createContext(null);

const AppContextP = ({ children }) => {
  const [state, setState] = useState(
    getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) =>
        setState({
          store: { ...state.store, ...updatedStore },
          actions: { ...state.actions },
        }),
    })
  );

  return <AppContextP.Provider value={state}>{children}</AppContextP.Provider>;
};

export default AppContext;
