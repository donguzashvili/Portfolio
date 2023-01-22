import React, { useEffect, useContext } from "react";

import "./app.sass";

// state imports
import { DataContext } from "./state";

// components

import { RouterProvider } from "react-router-dom";
import component from "./routing";
import Navigation from "./components/navigation/Navigation";

function App() {
  const { setState } = useContext(DataContext);
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <RouterProvider router={component} />
    </div>
  );
}

export default App;
