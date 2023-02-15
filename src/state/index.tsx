import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataType } from "../types/dataType";

interface DataContextType {
  data: dataType | null | undefined;
  setData: React.Dispatch<React.SetStateAction<dataType | null | undefined>>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState = {} as dataType;

// @ts-ignore
const DataContext = createContext<DataContextType>({ state: initialState });

type propType = {
  children: React.ReactNode;
};

const ContextState = ({ children }: propType) => {
  const [data, setData] = useState<dataType | null | undefined>(null);
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <DataContext.Provider value={{ data, setData, menu, setMenu }}>
      {children}
    </DataContext.Provider>
  );
};

export { ContextState, DataContext };
