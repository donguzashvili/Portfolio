import React, { createContext, useContext, useState } from "react";
import { dataType } from "../types/dataType";

interface DataContextType {
  state: dataType | null | undefined;
  setState: React.Dispatch<React.SetStateAction<dataType | null | undefined>>;
}

const initialState = {} as dataType;

// @ts-ignore
const DataContext = createContext<DataContextType>({ state: initialState });

type propType = {
  children: React.ReactNode;
};

const ContextState = ({ children }: propType) => {
  const [state, setState] = useState<dataType | null | undefined>(null);

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};

export { ContextState, DataContext };
