"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CustomStoreContext = createContext();

export function CustomStoreProvider({ children }) {
  const [counter, setCounter] = useState(1);

  return (
    <CustomStoreContext.Provider value={{ counter, setCounter }}>
      {children}
    </CustomStoreContext.Provider>
  );
}

export const useCustomStoreContext = () => useContext(CustomStoreContext);
